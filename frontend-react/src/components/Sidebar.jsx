import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div className="brand">NK ERP</div>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/messages">MESSAGES</Link>
        <Link to="/calendar">CALENDAR</Link>
        <Link to="/">DASHBOARD</Link>
        <Link to="/products">PRODUCTS</Link>
        <Link to="/orders">ORDERS</Link>
        <a className="exit">EXIT</a>
      </nav>
    </aside>
  )
}
