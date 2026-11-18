# StockFlow — Smart Warehouse & Inventory Management

A frontend-only React + Vite warehouse management demo. It uses realistic seed data, React Context and `localStorage`; no backend or external database is required.

## Requirements
- Node.js 18.18+ (Node 20 LTS recommended)
- npm

## Setup
1. Extract `smart-warehouse-inventory.zip`.
2. Open the extracted `smart-warehouse-inventory` folder in VS Code.
3. Open the terminal in that folder.
4. Install packages:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open the local URL printed by Vite, usually `http://localhost:5173`.

## Demo login
- Email: `admin@stockflow.demo`
- Password: `demo123`
- Role: choose any role from the role dropdown to explore role-specific navigation.

The demo login is intentionally simulated. It is not secure authentication.

## Build for production
```bash
npm run build
npm run preview
```

## Included modules
- Overview dashboard with live KPIs, stock movement chart, category chart and warehouse utilization
- Warehouses, products, storage locations and suppliers (CRUD)
- Stock receipt, issue and inter-warehouse transfer
- Purchase orders, approval and receiving workflow
- Sales orders with stock validation and stock commitment
- Shipment scheduling and delivery status updates
- Staff and customer directory
- Expense ledger and operational financial summary
- Audit scheduling, notifications and CSV report exports
- Light/dark theme, responsive sidebar, searchable tables, pagination, modal forms and local persistence

## Data and reset
All operational data is stored in browser `localStorage` under `stockflow-data`. To reset to the original sample data, open browser DevTools → Application → Local Storage, delete `stockflow-data`, `stockflow-user` and `stockflow-theme`, then refresh.

## Important demo limitations
This is a frontend learning project. Authentication, permissions, order workflows and records are simulated in the browser and are not production security or a substitute for a server-side inventory ledger. The sales flow commits stock when an order is created; shipment delivery updates the order status. The demo uses one product line per quick-create purchase/sales form to keep the workflow easy to demonstrate.
