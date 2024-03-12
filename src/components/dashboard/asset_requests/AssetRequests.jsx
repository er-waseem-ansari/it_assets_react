import React, { useContext, useEffect, useState } from 'react'
import './AssetRequests.css'
import AuthContext from '../../../context/AuthContext'
import TicketService from '../../../services/ticket_service/TicketService'
import { Link } from 'react-router-dom'
function AssetRequests() {
    const [activeAssetRequests, setActiveAssetRequests] = useState([])
    const { auth } = useContext(AuthContext)
    const [totalTickets, setTotalTickets] = useState(0)
    useEffect(() => {
        const fetchActiveAssetRequests = async () => {
            try {
                const response = await TicketService.getAllTickets("IN_PROCESS", auth.jwtToken);
                const filteredTickets = response.data.filter(ticket => ticket.ticketType === "ISSUE").slice(0, 3);
                setActiveAssetRequests(filteredTickets);
                setTotalTickets(response.data.length)
            } catch (error) {
                console.error("Error fetching tickets: ", error);
            }
        };

        fetchActiveAssetRequests();
    }, [auth.jwtToken]);
    useEffect(() => {
        console.log("Active asset request ", activeAssetRequests);
    }, [activeAssetRequests]);


    return (
        <div className='asset-request-container'>
            <div className='ar-heading'><h6>Asset requests</h6></div>
            <div className='content'>
                <p className="asset-reqest-number">{totalTickets} active requests</p>
                {
                    activeAssetRequests.map((ticket) => (
                        <div className="unit-request" key={ticket.ticketId}>
                            <div className='unit-1'>
                                <span ><img src="" alt="" className='profile' /></span>
                                <span>{ticket.employee.firstName + " " + ticket.employee.lastName}</span>
                            </div>
                            <div className='unit-2'>
                                <span>{ticket.asset.model}</span>
                                <span>Today</span>
                            </div>
                        </div>
                    ))
                }

                <div className='view-all-div'><Link to={'/asset-requests/all'}><button>View All Request</button></Link></div>
            </div>
        </div>
    )
}

export default AssetRequests