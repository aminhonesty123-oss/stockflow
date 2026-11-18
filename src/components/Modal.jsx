import { X } from 'lucide-react'
export default function Modal({title,onClose,children,wide=false}) {
 return <div className="modal-backdrop" onMouseDown={e=>e.target===e.currentTarget&&onClose()}><section className={`modal ${wide?'modal-wide':''}`}><header className="modal-head"><h3>{title}</h3><button className="icon-btn" onClick={onClose}><X size={18}/></button></header>{children}</section></div>
}
