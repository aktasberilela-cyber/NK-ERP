import React from 'react'
import './messages.css'

export default function Messages(){
  return (
    <section className="messages">
      <div className="panel">
        <div className="field to">ALICI:</div>
        <div className="field msg">MESAJINIZ:</div>
      </div>

      <div className="history">
        <div className="history-card">
          <div className="tab">GEÇMİŞ</div>
          <div className="item">İSİM SOYİSİM - GG.AA.YYYY</div>
        </div>
      </div>
    </section>
  )
}
