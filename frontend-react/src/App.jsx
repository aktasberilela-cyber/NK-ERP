import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Messages from './components/Messages'
import Dashboard from './components/Dashboard'

export default function App(){
  return (
    <div className="app-root">
      <Sidebar />
      <main className="main-area">
        <Header />
        <div className="layout">
          <div className="left">
            <Messages />
          </div>
          <div className="right">
            <Dashboard />
          </div>
        </div>
      </main>
    </div>
  )
}
