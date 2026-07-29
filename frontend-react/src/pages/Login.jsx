import React, { useState } from 'react'
import api from '../utils/api'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const nav = useNavigate()

  const submit = async (e)=>{
    e.preventDefault()
    try{
      const res = await api.post('/auth/login',{ email, password })
      localStorage.setItem('token', res.data.token)
      alert('Giriş başarılı')
      nav('/')
    }catch(err){
      alert('Giriş başarısız')
    }
  }

  return (
    <div style={{padding:20}}>
      <h2>Giriş</h2>
      <form onSubmit={submit}>
        <div><input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <div style={{marginTop:8}}><input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /></div>
        <div style={{marginTop:12}}><button type="submit">Giriş</button></div>
      </form>
    </div>
  )
}
