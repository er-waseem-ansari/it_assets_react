import React, { useContext, useEffect, useState } from 'react'
import './AssetRequests.css'
import AuthContext from '../../../context/AuthContext'
import TicketService from '../../../services/ticket_service/TicketService'
function AssetRequests() {
const [activeAssetRequests, setActiveAssetRequests] = useState([])
const {auth} = useContext(AuthContext)
useEffect(()=>{
    try{
        // const response = TicketService.getAllTickets("IN_PROCESS",auth.jwtToken)

        TicketService.getAllTickets("IN_PROCESS",auth.jwtToken).then((response)=> {
            console.log(response)
        })

        // console.log("fetched ticket",JSON.stringify(response.data))
    } catch(error){
        console.error("Error fetching tickets: ", error)
    }
})


  return (
    <div className='asset-request-container'>
        <div className='ar-heading'><h6>Asset requests</h6></div>
        <div className='content'>
            <p className="asset-reqest-number">15 active requests</p>
            <div className="unit-request">
                <div className='unit-1'>
                    <span ><img src="" alt="" className='profile'/></span>
                    <span>Waseem</span>
                </div>
                <div className='unit-2'>
                    <span>i5 12th Gen Laptop</span>
                    <span>Today</span>
                </div>
            </div>

            <div className="unit-request">
                <div className='unit-1'>
                    <span ><img src="" alt="" className='profile'/></span>
                    <span>Waseem</span>
                </div>
                <div className='unit-2'>
                    <span>i5 12th Gen Laptop</span>
                    <span>Today</span>
                </div>
            </div>

            <div className="unit-request">
                <div className='unit-1'>
                    <span ><img src="" alt="" className='profile'/></span>
                    <span>Waseem</span>
                </div>
                <div className='unit-2'>
                    <span>i5 12th Gen Laptop</span>
                    <span>Today</span>
                </div>
            </div>
            <div className='view-all-div'><button>View All Request</button></div>
        </div>
    </div>
  )
}

export default AssetRequests