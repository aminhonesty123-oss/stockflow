import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { WarehouseProvider } from './context/WarehouseContext'
import App from './App'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><BrowserRouter><WarehouseProvider><App /></WarehouseProvider></BrowserRouter></React.StrictMode>
)
