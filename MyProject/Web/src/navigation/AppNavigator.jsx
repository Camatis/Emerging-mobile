import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import LandingScreen from '../screens/LandingScreen'
import LoginScreen from '../screens/LoginScreen'
import DashboardScreen from '../screens/DashboardScreen'
import AdminScreen from '../screens/AdminScreen'
import { useAuthStore } from '../store/useAuthStore'

export default function AppNavigator(){
  const isAdmin = useAuthStore(state => state.isAdmin)
  return (
    <div>
      <header className="app-header">
        <nav>
          <Link to="/">Welcome</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<LandingScreen/>} />
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/dashboard" element={<DashboardScreen/>} />
          <Route path="/admin" element={isAdmin ? <AdminScreen/> : <Navigate to="/login" replace/>} />
        </Routes>
      </main>
    </div>
  )
}
