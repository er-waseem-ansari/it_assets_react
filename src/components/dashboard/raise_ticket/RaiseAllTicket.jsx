import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './RaiseAllTicket.css'
import SmallButton from '../small_button/SmallButton'
import AuthContext from '../../../context/AuthContext'
import RaiseTicketService from '../../../services/employeeService/RaiseTicketService'

const RaiseAllTicket = () => {

    const [problemDescription, setProblemDescription] = useState('')
    const [ticketType, setTicketType] = useState('')
    const navigate = useNavigate()
    const { auth } = useContext(AuthContext)
    // const[employeeId,setEmployeeId]=useState(auth.employeeId)

    const { id } = useParams()
    const submitTicketDetails = (e) => {
        e.preventDefault();
        // const tickets={ticketType,description}
        // console.log("data recieved from form",tickets);
        const employee = { "employeeId": auth.employeeId }
        const asset = { "assetId": 1 }
        // const headers={"Authorization":`Bearer ${auth.jwtToken}`}

        const ticketRequestObj = { ticketType, problemDescription, employee, asset }
        console.log("assetId", 1);

        RaiseTicketService.raiseTicket(auth.jwtToken, ticketRequestObj).then((response) => {
            console.log("response-recieved from api", JSON.stringify(response))
            console.log("response", response.data)
            navigate(-1)

        });
    }




    return (
            <div className="raise-all-ticket-container">
                <div className="raise-all-ticket-form-container">
                    <form action="" onSubmit={(e) => submitTicketDetails(e)}>
                        
                        <div className="formbold-mb-5">
                            <label htmlFor="email" className="formbold-form-label"> Ticket-Type </label>
                            <select className="form-select" aria-label="Default select example" value={ticketType} onChange={(e) => setTicketType(e.target.value)}>
                                <option selected>Select Ticket type</option>
                                <option value="REPAIR">REPAIR</option>
                                <option value="LICENCE">LICENCE</option>
                            </select>
                        </div>
                        <div className="formbold-mb-5">
                            <label htmlFor="name" className="formbold-form-label"> Problem Description </label>
                            <textarea name="name" id="name" value={problemDescription} placeholder="Description" className="formbold-form-input" onChange={(e) => setProblemDescription(e.target.value)} />
                        </div>
                        <div>
                            {/* <SmallButton buttonText= "Submit"/> */}
                            <button className="formbold-btn">Submit</button>
                        </div>
                    </form>
                    </div>
            </div>
        
    )
}

export default RaiseAllTicket