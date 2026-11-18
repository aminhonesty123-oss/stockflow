import {useMemo,useState} from 'react'
import {Plus, Pencil, Trash2} from 'lucide-react'
import {useWarehouse} from '../context/WarehouseContext'
import {csvDownload} from '../utils/helpers'
import Modal from './Modal'
import DataTable from './Table'
export default function CrudPage({title,subtitle,store,fields,columns,searchKeys,defaults={},idPrefix,extra,transform}) {
 const {data,add,update,remove,notify}=useWarehouse();const rows=data[store]||[];const [editing,setEditing]=useState(null);const [form,setForm]=useState(defaults)
 const open=row=>{setEditing(row||'new');setForm(row?{...row}: {...defaults})}
 const save=e=>{e.preventDefault();for(const f of fields){if(f.required&& !String(form[f.key]??'').trim()){notify(`${f.label} is required`,'error');return}}
 const payload=transform?transform(form):form
 if(editing==='new')add(store,payload);else update(store,editing.id,payload);setEditing(null)}
 const actions=row=><><button className="icon-btn small" onClick={()=>open(row)} title="Edit"><Pencil size={15}/></button><button className="icon-btn small danger-text" onClick={()=>{if(confirm(`Delete ${row.name||row.id}?`))remove(store,row.id)}} title="Delete"><Trash2 size={15}/></button></>
 return <div className="page"><div className="page-heading"><div><div className="eyebrow">OPERATIONS / {title.toUpperCase()}</div><h1>{title}</h1><p>{subtitle}</p></div><button className="btn btn-primary" onClick={()=>open()}><Plus size={17}/> Add {title.replace(/s$/,'')}</button></div>{extra}<DataTable title={`All ${title}`} rows={rows} columns={columns} searchKeys={searchKeys||fields.map(f=>f.key)} actions={actions} exportRows={()=>csvDownload(`${store}.csv`,rows)}/>{editing&&<Modal title={`${editing==='new'?'Add':'Edit'} ${title.replace(/s$/,'')}`} onClose={()=>setEditing(null)}><form className="form-grid" onSubmit={save}>{fields.map(f=><label className={f.full?'field-full':''} key={f.key}>{f.label}{f.type==='select'?<select value={form[f.key]??''} required={f.required} onChange={e=>setForm({...form,[f.key]:e.target.value})}><option value="">Select {f.label}</option>{f.options.map(o=><option key={o.value??o} value={o.value??o}>{o.label??o}</option>)}</select>:f.type==='textarea'?<textarea rows="3" value={form[f.key]??''} onChange={e=>setForm({...form,[f.key]:e.target.value})}/>:<input type={f.type||'text'} min={f.min} value={form[f.key]??''} required={f.required} onChange={e=>setForm({...form,[f.key]:e.target.value})}/>}</label>)}<div className="field-full form-actions"><button type="button" className="btn btn-light" onClick={()=>setEditing(null)}>Cancel</button><button className="btn btn-primary">Save record</button></div></form></Modal>}</div>
}
