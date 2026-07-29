import React from 'react'
import './sidebar.css'

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div className="brand">NK ERP</div>
      <nav>
        <a className="active">HOME</a>
        <a>MESSAGES</a>
        <a>CALENDAR</a>
        <a>DASHBOARD</a>
        <a>PRIM TABLE</a>
        <a>DOCTORS - PHARMACISTS</a>
        <a className="exit">EXIT</a>
      </nav>
    </aside>
  )
}
