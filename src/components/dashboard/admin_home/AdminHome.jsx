import React from 'react'
import './AdminHome.css'
import WelcomePanel from '../welcome_panel/WelcomePanel'
import AssetRequests from '../asset_requests/AssetRequests'
import BarGraph from '../bar_graph/BarGraph'
import DateComponent from '../date_component/DateComponent'
import LatestTickets from '../latest_tickets/LatestTickets'

function AdminHome() {

    

    return (
        <>
            <div className='admin-dashboard-left-body'>
                <WelcomePanel />
                <br />
                <AssetRequests />
                <BarGraph />
            </div>
            <div className="admin-dashboard-right-body">
                <DateComponent />
                <LatestTickets />
            </div>
        </>
    )
}

export default AdminHome