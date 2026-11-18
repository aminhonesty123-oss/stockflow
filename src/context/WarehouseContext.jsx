import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { seed } from '../data/seed'
import { today, uid } from '../utils/helpers'

const Ctx = createContext(null)
const initialUser = {name:'Alex Morgan',email:'admin@stockflow.demo',role:'Administrator'}
export function WarehouseProvider({children}) {
  const [data,setData] = useState(() => {
    try { const saved=localStorage.getItem('stockflow-data'); return saved ? JSON.parse(saved) : seed } catch { return seed }
  })
  const [user,setUser] = useState(() => { try{return JSON.parse(localStorage.getItem('stockflow-user')) || null}catch{return null} })
  const [theme,setTheme] = useState(() => localStorage.getItem('stockflow-theme') || 'light')
  const [toast,setToast] = useState(null)
  useEffect(()=>localStorage.setItem('stockflow-data',JSON.stringify(data)),[data])
  useEffect(()=>{user?localStorage.setItem('stockflow-user',JSON.stringify(user)):localStorage.removeItem('stockflow-user')},[user])
  useEffect(()=>{localStorage.setItem('stockflow-theme',theme);document.documentElement.dataset.theme=theme},[theme])
  const notify=(message,type='success')=>{setToast({message,type});window.clearTimeout(window.__stockToast);window.__stockToast=window.setTimeout(()=>setToast(null),3200)}
  const add=(key,item)=>{setData(d=>({...d,[key]:[...d[key],{id:item.id||uid(key),...item}]}));notify('Record created successfully')}
  const update=(key,id,patch)=>{setData(d=>({...d,[key]:d[key].map(x=>x.id===id?{...x,...patch}:x)}));notify('Changes saved')}
  const remove=(key,id)=>{setData(d=>({...d,[key]:d[key].filter(x=>x.id!==id)}));notify('Record deleted','info')}
  const moveStock=(productId,qty,type,warehouse,reference='Manual movement',note='')=>{
    const p=data.products.find(x=>x.id===productId)
    if(!p) throw new Error('Product not found')
    if(!Number.isFinite(+qty)||+qty<=0) throw new Error('Quantity must be greater than zero')
    if(type==='OUT' && p.stock<+qty) throw new Error(`Insufficient stock. Available: ${p.stock}`)
    setData(d=>({...d,
      products:d.products.map(x=>x.id===productId?{...x,stock:x.stock+(type==='IN'?+qty:-qty)}:x),
      movements:[{id:uid('MOV'),date:today(),type,product:productId,qty:+qty,warehouse:warehouse||p.warehouse,reference,note},...d.movements]
    }))
    notify(`Stock ${type==='IN'?'received':'issued'} successfully`)
  }
  const receivePurchase=id=>{
    const po=data.purchases.find(x=>x.id===id)
    if(!po||po.status==='Received') throw new Error('Purchase order already received or missing')
    const products={...data.products}
    po.items.forEach(it=>{const p=products[it.product];if(p)p.stock+=Number(it.qty)})
    const movements=po.items.map(it=>({id:uid('MOV'),date:today(),type:'IN',product:it.product,qty:Number(it.qty),warehouse:po.warehouse,reference:po.id,note:'Purchase received'}))
    setData(d=>({...d,products:Object.values(products),movements:[...movements,...d.movements],purchases:d.purchases.map(x=>x.id===id?{...x,status:'Received'}:x)}))
    notify('Purchase received and inventory updated')
  }
  const createSale=order=>{
    for(const it of order.items){const p=data.products.find(x=>x.id===it.product);if(!p||p.warehouse!==order.warehouse||p.stock<it.qty)throw new Error(`Insufficient available stock for ${p?.name||'selected product'}`)}
    setData(d=>({...d,
      products:d.products.map(p=>{const it=order.items.find(x=>x.product===p.id);return it?{...p,stock:p.stock-it.qty}:p}),
      sales:[{id:uid('SO'),date:today(),status:'Picking',...order},...d.sales],
      movements:[...order.items.map(it=>({id:uid('MOV'),date:today(),type:'OUT',product:it.product,qty:it.qty,warehouse:order.warehouse,reference:'Sales order',note:'Stock committed to sales order'})),...d.movements]
    }))
    notify('Sales order created and stock committed')
  }
  const transfer=(productId,qty,toWarehouse)=>{
    const p=data.products.find(x=>x.id===productId)
    if(!p||p.stock<qty||qty<=0)throw new Error('Invalid transfer quantity or insufficient stock')
    setData(d=>({...d,products:d.products.map(x=>x.id===productId?{...x,stock:x.stock-qty,warehouse:toWarehouse}:x),
      movements:[{id:uid('MOV'),date:today(),type:'TRANSFER',product:productId,qty,warehouse:toWarehouse,reference:'Warehouse transfer',note:`Transferred from ${p.warehouse} to ${toWarehouse}`},...d.movements]}))
    notify('Stock transferred')
  }
  const value=useMemo(()=>({data,setData,user,setUser,theme,setTheme,toast,notify,add,update,remove,moveStock,receivePurchase,createSale,transfer}),[data,user,theme,toast])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
export const useWarehouse=()=>useContext(Ctx)
