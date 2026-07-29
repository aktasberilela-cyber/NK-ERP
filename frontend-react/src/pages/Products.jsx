import React, { useEffect, useState } from 'react'
import api from '../utils/api'

export default function Products(){
  const [items,setItems] = useState([])
  useEffect(()=>{ api.get('/products').then(r=>setItems(r.data)).catch(()=>{}) },[])
  return (
    <div style={{padding:20}}>
      <h2>Products</h2>
      <table style={{width:'100%'}}>
        <thead><tr><th>Code</th><th>Name</th><th>Stock</th><th>Price</th></tr></thead>
        <tbody>
          {items.map(p=> <tr key={p.id}><td>{p.code}</td><td>{p.name}</td><td>{p.stock}</td><td>{p.price}</td></tr>)}
        </tbody>
      </table>
    </div>
  )
}
