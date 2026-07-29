import React, { useEffect, useState } from 'react'
import api from '../utils/api'

export default function Dashboard(){
  const [products,setProducts] = useState([])
  useEffect(()=>{
    api.get('/products').then(r=>setProducts(r.data)).catch(()=>{})
  },[])
  return (
    <div style={{padding:20}}>
      <h2>Dashboard</h2>
      <div style={{display:'flex',gap:12}}>
        <div style={{flex:1}}>
          <h3>Products</h3>
          <ul>{products.map(p=> <li key={p.id}>{p.name} - {p.stock}</li>)}</ul>
        </div>
        <div style={{width:320}}>
          <h3>Quick Stats</h3>
          <div>Visits: 2,035,687</div>
        </div>
      </div>
    </div>
  )
}
