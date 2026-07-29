import React from 'react'
import './dashboard.css'

export default function Dashboard(){
  return (
    <section className="dashboard-preview">
      <div className="dash-left">
        <div className="chart-placeholder">[Charts grid preview]</div>
      </div>
      <aside className="dash-right">
        <div className="stat">2.035.687<br/><small>Visits</small></div>
        <div className="stat">96 sec<br/><small>Avg Session</small></div>
        <div className="stat">2.2 Pages<br/><small>Per Visit</small></div>
      </aside>
    </section>
  )
}
