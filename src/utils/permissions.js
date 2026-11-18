export const roleAccess={
  Administrator:['/','/warehouses','/products','/locations','/movements','/purchases','/sales','/shipments','/suppliers','/staff','/expenses','/audits','/reports','/notifications'],
  'Warehouse Owner':['/','/warehouses','/products','/locations','/movements','/purchases','/sales','/shipments','/suppliers','/staff','/expenses','/audits','/reports','/notifications'],
  'Warehouse Manager':['/','/warehouses','/products','/locations','/movements','/purchases','/sales','/shipments','/staff','/audits','/reports','/notifications'],
  'Inventory Manager':['/','/products','/locations','/movements','/audits','/reports','/notifications'],
  'Procurement Officer':['/','/products','/purchases','/suppliers','/reports','/notifications'],
  'Sales Officer':['/','/products','/sales','/shipments','/reports','/notifications'],
  'Logistics Manager':['/','/shipments','/sales','/staff','/reports','/notifications'],
  'Warehouse Staff':['/','/products','/locations','/movements','/notifications']
}
