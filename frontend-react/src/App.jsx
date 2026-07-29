import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import DashboardPage from './pages/Dashboard'
import LoginPage from './pages/Login'
import ProductsPage from './pages/Products'
import MessagesPage from './pages/Messages'
import OrdersPage from './pages/Orders'
import './index.css'

export default function App(){
  return (
    <div className="app-root">
      <Sidebar />
      <main className="main-area">
        <Header />
        <Routes>
          <Route path="/" element={<DashboardPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/products" element={<ProductsPage/>} />
          <Route path="/messages" element={<MessagesPage/>} />
          <Route path="/orders" element={<OrdersPage/>} />
        </Routes>
      </main>
    </div>
  )
}
