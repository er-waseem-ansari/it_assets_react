import React from 'react'
import AssetRequests from './asset_requests/AssetRequests'
import WelcomePanel from './welcome_panel/WelcomePanel'
import './AdminDashboard.css'
import NavBar from './navbar/NavBar'
import SideBar from './side_bar/SideBar'
import DateComponent from '../common_components/DateComponent'
import LatestTickets from './latest_tickets/LatestTickets'
import BarGraph from './bar_graph/BarGraph'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CategoryTable from '../categories/catetory_table/CategoryTable'
function AdminDashboard() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: 
            <>
              <div className='admin-dashboard-left-body'>
                <WelcomePanel/>
                <br />
                <AssetRequests />
                <BarGraph/>
              </div>
              <div className="admin-dashboard-right-body">
                <DateComponent/>
                <LatestTickets/>
              </div>
            </>
    },
    {
      path: '/categories',
      element: 
      <div  className='category-table'>
      <CategoryTable/>
      </div>
      
    }
  
  ])
  return (
    <div className='admin-dashboard-body'>
       <SideBar/>
      <div className="admin-main-panel">
        <NavBar/>
        <div className="admin-dashboard-main-body">
          <RouterProvider router={router}/>
        </div>
      </div>
      
      
    </div>
  )
}

export default AdminDashboard