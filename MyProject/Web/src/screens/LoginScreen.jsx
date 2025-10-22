import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

export default function LoginScreen(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    // simple mock auth
    if(email && password){
      // example hard-coded admin credentials
      const ADMIN_EMAIL = 'admin@example.com'
      const ADMIN_PASSWORD = 'AdminPass123'

      // set user in zustand store
      useAuthStore.getState().setUser({ email })

      if(email === ADMIN_EMAIL && password === ADMIN_PASSWORD){
        useAuthStore.getState().setAdmin(true)
        navigate('/admin')
        return
      }

      navigate('/dashboard')
    } else {
      alert('Enter email and password')
    }
  }

  return (
    <div className="screen center">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Email
          <input value={email} onChange={e=>setEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </div>
  )
}
