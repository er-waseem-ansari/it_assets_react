import React, { useContext, useEffect, useState } from 'react'
import './LatestTickets.css'
import AuthContext from '../../../context/AuthContext'
import TicketService from '../../../services/ticket_service/TicketService'
function LatestTickets() {

    const [ticketList, setTicketList] = useState([])
    const { auth } = useContext(AuthContext)
    useEffect(() => {
        if (auth.role === "USER") {
            TicketService.getTicketsByEmployeeId(auth.employeeId, auth.jwtToken).then((response) => {
                console.log("response recieved from get all tickets", response.data)
                const temp = response.data.slice(0, 5)
                setTicketList(temp)
            })
                .catch((error) => {
                    console.log("Error fetching tickets by employee ID", error)
                })
        }
        else {
            TicketService.getAllTickets("IN_PROCESS", auth.jwtToken).then((response) => {
                console.log("response recieved from get all tickets", response.data)
                const temp = response.data.slice(0, 5)
                setTicketList(temp)
            })
                .catch((error) => {
                    console.error("Error fetching all tickets in process:", error);
                });
        }
    }, [auth])

    return (
        <div className='admin-dashboard-latest-tickets'>
            <h6>Latest tickets</h6>

            {
                ticketList.map((ticket) => (
                    <div className="each-latest-ticket" key={ticket.ticketId}>
                        <div className='ticket-serial'>{ticket.ticketId}</div>
                        <div className='ticket-content'>
                            <div className="left-elt">
                                <span className='left-elt-name'>{ticket.employee.firstName + " " + ticket.employee.lastName}</span>
                                <span className='left-elt-desc'>{ticket.problemDescription}</span>
                            </div>
                            <div className="right-elt">
                                <span>7:56 PM</span>
                            </div>
                        </div>
                    </div>
                ))
            }

            <button className='admin-dltb'>View All Tickets</button>
        </div>
    )
}

export default LatestTickets