import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

export default function DashboardScreen(){
  const navigate = useNavigate()
  const user = useAuthStore(state => state.user)

  function signOut(){
    useAuthStore.getState().clearUser()
    navigate('/')
  }

  return (
    <div className="screen">
      <h1>Dashboard</h1>
      <p>Welcome {user?.email ?? 'guest'}.</p>
      <button onClick={signOut}>Sign out</button>
    </div>
  )
}
