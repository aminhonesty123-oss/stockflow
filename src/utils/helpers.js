export const uid=(prefix='ID')=>`${prefix.toUpperCase().slice(0,3)}-${Date.now().toString().slice(-6)}${Math.floor(Math.random()*90+10)}`
export const today=()=>new Date().toISOString().slice(0,10)
export const money=n=>new Intl.NumberFormat('en-KE',{style:'currency',currency:'KES',maximumFractionDigits:0}).format(Number(n)||0)
export const label=(arr,id,key='name')=>arr.find(x=>x.id===id)?.[key]||id||'—'
export const csvDownload=(name,rows)=>{
  if(!rows.length)return
  const keys=Object.keys(rows[0]);const esc=v=>`"${String(v??'').replaceAll('"','""')}"`
  const csv=[keys.map(esc).join(','),...rows.map(r=>keys.map(k=>esc(r[k])).join(','))].join('\\n')
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download=name;a.click();URL.revokeObjectURL(a.href)
}
