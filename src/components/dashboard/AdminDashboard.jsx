import React from 'react'
import AssetRequests from './asset_requests/AssetRequests'
import WelcomePanel from './welcome_panel/WelcomePanel'
import './AdminDashboard.css'
import NavBar from './navbar/NavBar'
import SideBar from './side_bar/SideBar'
import DateComponent from '../common_components/DateComponent'
import LatestTickets from './latest_tickets/LatestTickets'
import BarGraph from './bar_graph/BarGraph'
function AdminDashboard() {
  return (
    <div className='admin-dashboard-body'>
      <div className="admin-side-panel">
       <SideBar/>
      </div>
      <div className="admin-main-panel">
        <NavBar/>
        <div className="admin-dashboard-main-body">
        
          <div className='admin-dashboard-left-body'>
            
            <WelcomePanel/>
            <br />
            <AssetRequests />
            {/* <br /> */}
            <BarGraph/>
          </div> 

          <div className="admin-dashboard-right-body">
            
            <DateComponent/>
            <LatestTickets/>
          </div>
      </div>
      </div>
      
      
    </div>
  )
}

export default AdminDashboard