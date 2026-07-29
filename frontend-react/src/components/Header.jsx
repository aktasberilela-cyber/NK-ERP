import React from 'react'
import { useNavigate } from 'react-router-dom'
import './header.css'

export default function Header(){
  const nav = useNavigate()
  return (
    <header className="header">
      <h1>NK ERP</h1>
      <div className="actions">
        <button className="btn new" onClick={()=>nav('/messages')}>+ YENİ MESAJ</button>
        <button className="btn notify">BİLDİRİMLER</button>
      </div>
    </header>
  )
}
