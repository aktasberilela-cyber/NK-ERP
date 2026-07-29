import React from 'react'
import './header.css'

export default function Header(){
  return (
    <header className="header">
      <h1>MESSAGES</h1>
      <div className="actions">
        <button className="btn new">+ YENİ MESAJ</button>
        <button className="btn notify">BİLDİRİMLER</button>
      </div>
    </header>
  )
}
