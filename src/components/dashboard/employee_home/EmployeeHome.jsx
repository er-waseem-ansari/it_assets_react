import React from 'react'
import WelcomePanel from '../welcome_panel/WelcomePanel'
import DateComponent from '../date_component/DateComponent'
import LatestTickets from '../latest_tickets/LatestTickets'
import './EmployeeHome.css'
import AssetOverview from '../asset_overview/AssetOverview'

function EmployeeHome() {
  return (
    <>
            <div className='employee-dashboard-left-body'>
                <WelcomePanel />
                <br />
                <AssetOverview/>
            </div>
            <div className="employee-dashboard-right-body">
                <DateComponent />
                <LatestTickets />
            </div>
        </>
  )
}

export default EmployeeHome