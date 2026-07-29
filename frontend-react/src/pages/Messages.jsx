import React, { useEffect, useState } from 'react'
import api from '../utils/api'

export default function Messages(){
  const [msgs,setMsgs] = useState([])
  useEffect(()=>{ const token = localStorage.getItem('token'); api.get('/messages',{ headers: { Authorization: token ? `Bearer ${token}` : '' }}).then(r=>setMsgs(r.data)).catch(()=>{}) },[])
  return (
    <div style={{padding:20}}>
      <h2>Messages</h2>
      <ul>{msgs.map(m=> <li key={m.id}><strong>{m.from}</strong> → {m.to}: {m.body}</li>)}</ul>
    </div>
  )
}
