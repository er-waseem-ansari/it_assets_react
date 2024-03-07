import React, { useContext, useEffect } from 'react'
import './AdminDashboard.css'
import NavBar from '../../components/dashboard/navbar/NavBar'
import SideBar from '../../components/dashboard/side_bar/SideBar'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import { AuthPage } from '../authentication/AuthPage'
function AdminDashboard() {
  const { auth } = useContext(AuthContext)

  return (
    auth?<>
    <div className='admin-dashboard-body'>
      <SideBar />
      <div className="admin-main-panel">
        <NavBar />
        <div className="admin-dashboard-main-body">
          <Outlet />
        </div>
      </div>


    </div>
    </> 
    :
    <Navigate to="/auth" />
  )
}

export default AdminDashboard