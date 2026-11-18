export const seed = {
  warehouses: [
    {id:'WH-001',name:'Nairobi Distribution Hub',category:'Distribution',address:'Mombasa Road, Nairobi',capacity:12000,used:8400,owner:'StockFlow Kenya',manager:'Grace Wanjiku',status:'Active'},
    {id:'WH-002',name:'Mombasa Port Warehouse',category:'Port Storage',address:'Changamwe, Mombasa',capacity:8000,used:5100,owner:'StockFlow Kenya',manager:'Peter Otieno',status:'Active'},
    {id:'WH-003',name:'Nakuru Regional Store',category:'Regional',address:'Industrial Area, Nakuru',capacity:5000,used:2100,owner:'StockFlow Kenya',manager:'Mercy Njeri',status:'Active'}
  ],
  products: [
    {id:'PR-001',sku:'SKU-1001',name:'Wireless Barcode Scanner',category:'Electronics',description:'2D wireless scanner',price:6800,cost:4200,stock:145,min:35,warehouse:'WH-001',location:'A1-R02-S03',barcode:'6161001001',batch:'B-2408',expiry:''},
    {id:'PR-002',sku:'SKU-1002',name:'Thermal Receipt Rolls',category:'Office Supplies',description:'80mm thermal paper rolls',price:180,cost:95,stock:420,min:100,warehouse:'WH-001',location:'A2-R01-S01',barcode:'6161001002',batch:'B-2410',expiry:''},
    {id:'PR-003',sku:'SKU-1003',name:'Packing Tape 48mm',category:'Packaging',description:'Clear heavy-duty tape',price:250,cost:130,stock:68,min:80,warehouse:'WH-002',location:'B1-R03-S02',barcode:'6161001003',batch:'B-2409',expiry:''},
    {id:'PR-004',sku:'SKU-1004',name:'Industrial Safety Gloves',category:'Safety',description:'Cut-resistant work gloves',price:950,cost:560,stock:0,min:25,warehouse:'WH-002',location:'B2-R01-S01',barcode:'6161001004',batch:'B-2407',expiry:''},
    {id:'PR-005',sku:'SKU-1005',name:'LED Warehouse Bulb',category:'Electrical',description:'20W energy-saving LED',price:720,cost:390,stock:230,min:50,warehouse:'WH-003',location:'C1-R02-S02',barcode:'6161001005',batch:'B-2411',expiry:''},
    {id:'PR-006',sku:'SKU-1006',name:'Stretch Film 500mm',category:'Packaging',description:'Industrial pallet wrap',price:1450,cost:900,stock:42,min:40,warehouse:'WH-003',location:'C2-R01-S04',barcode:'6161001006',batch:'B-2412',expiry:''}
  ],
  suppliers:[
    {id:'SUP-001',name:'East Africa Supplies Ltd',contact:'James Kariuki',email:'sales@easupplies.co.ke',phone:'+254 700 111 222',city:'Nairobi',status:'Active'},
    {id:'SUP-002',name:'Coastline Packaging',contact:'Amina Hassan',email:'orders@coastline.co.ke',phone:'+254 711 222 333',city:'Mombasa',status:'Active'},
    {id:'SUP-003',name:'TechSource Kenya',contact:'David Mwangi',email:'info@techsource.co.ke',phone:'+254 722 333 444',city:'Nairobi',status:'Active'}
  ],
  customers:[
    {id:'CUS-001',name:'Metro Retailers',email:'procurement@metro.co.ke',phone:'+254 733 100 200',address:'Westlands, Nairobi'},
    {id:'CUS-002',name:'QuickMart Stores',email:'buying@quickmart.co.ke',phone:'+254 744 200 300',address:'Kisumu, Kenya'}
  ],
  employees:[
    {id:'EMP-001',name:'Grace Wanjiku',role:'Warehouse Manager',department:'Operations',warehouse:'WH-001',phone:'+254 700 123 456',status:'Active'},
    {id:'EMP-002',name:'Peter Otieno',role:'Logistics Manager',department:'Logistics',warehouse:'WH-002',phone:'+254 711 234 567',status:'Active'},
    {id:'EMP-003',name:'Mercy Njeri',role:'Inventory Manager',department:'Inventory',warehouse:'WH-003',phone:'+254 722 345 678',status:'Active'},
    {id:'EMP-004',name:'Brian Kiptoo',role:'Driver',department:'Logistics',warehouse:'WH-001',phone:'+254 733 456 789',status:'Active'}
  ],
  locations:[
    {id:'LOC-001',warehouse:'WH-001',zone:'A',aisle:'01',rack:'02',shelf:'03',bin:'04',capacity:300,used:145,status:'Occupied'},
    {id:'LOC-002',warehouse:'WH-001',zone:'A',aisle:'02',rack:'01',shelf:'01',bin:'01',capacity:500,used:420,status:'Occupied'},
    {id:'LOC-003',warehouse:'WH-002',zone:'B',aisle:'01',rack:'03',shelf:'02',bin:'01',capacity:200,used:68,status:'Occupied'},
    {id:'LOC-004',warehouse:'WH-003',zone:'C',aisle:'01',rack:'02',shelf:'02',bin:'01',capacity:400,used:230,status:'Occupied'},
    {id:'LOC-005',warehouse:'WH-003',zone:'C',aisle:'03',rack:'01',shelf:'01',bin:'01',capacity:250,used:0,status:'Available'}
  ],
  purchases:[
    {id:'PO-1001',supplier:'SUP-001',warehouse:'WH-001',date:'2026-11-12',expected:'2026-11-22',status:'Approved',items:[{product:'PR-002',qty:200,cost:95}],total:19000},
    {id:'PO-1002',supplier:'SUP-003',warehouse:'WH-002',date:'2026-11-16',expected:'2026-11-25',status:'Pending',items:[{product:'PR-001',qty:30,cost:4200}],total:126000}
  ],
  sales:[
    {id:'SO-2001',customer:'CUS-001',warehouse:'WH-001',date:'2026-11-15',status:'Picking',items:[{product:'PR-001',qty:8,price:6800},{product:'PR-002',qty:20,price:180}],total:58000},
    {id:'SO-2002',customer:'CUS-002',warehouse:'WH-003',date:'2026-11-17',status:'Pending',items:[{product:'PR-005',qty:12,price:720}],total:8640}
  ],
  shipments:[
    {id:'SHP-001',order:'SO-2001',driver:'Brian Kiptoo',vehicle:'KDA 204A',address:'Westlands, Nairobi',dispatch:'2026-11-19',cost:1800,status:'In Transit'}
  ],
  movements:[
    {id:'MOV-001',date:'2026-11-17',type:'IN',product:'PR-002',qty:60,warehouse:'WH-001',reference:'Opening balance',note:'Initial stock'},
    {id:'MOV-002',date:'2026-11-17',type:'OUT',product:'PR-001',qty:8,warehouse:'WH-001',reference:'SO-2001',note:'Order reservation'}
  ],
  expenses:[
    {id:'EXP-001',date:'2026-11-05',warehouse:'WH-001',category:'Utilities',description:'Electricity',amount:24500},
    {id:'EXP-002',date:'2026-11-10',warehouse:'WH-002',category:'Transport',description:'Local transport',amount:12000}
  ],
  audits:[{id:'AUD-001',warehouse:'WH-001',date:'2026-11-28',auditor:'Grace Wanjiku',status:'Scheduled',discrepancy:0}],
  notifications:[
    {id:'NT-001',title:'Low stock alert',message:'Packing Tape 48mm is below its minimum level.',date:'2026-11-18',read:false,type:'warning'},
    {id:'NT-002',title:'Purchase approval',message:'PO-1002 is waiting for approval.',date:'2026-11-18',read:false,type:'info'}
  ]
}
