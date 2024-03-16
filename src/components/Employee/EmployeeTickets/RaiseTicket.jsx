import React, { useContext, useState } from 'react'
import '../EmployeeTickets/RaiseTicket.css'
import AuthContext from '../../../context/AuthContext'
import { useNavigate, useParams } from 'react-router-dom'
import RaiseTicketService from '../../../services/employeeService/RaiseTicketService'
const RaiseTicket = () => {

    const[problemDescription,setProblemDescription]=useState('')
    const[ticketType,setTicketType]=useState('')
    const navigate=useNavigate()
    const{auth}=useContext(AuthContext)
    // const[employeeId,setEmployeeId]=useState(auth.employeeId)

   const{id}=useParams()

    const submitTicketDetails=(e)=>{
        e.preventDefault();
        // const tickets={ticketType,description}
        // console.log("data recieved from form",tickets);
        const employee={"employeeId":auth.employeeId}
        const asset={"assetId":id}
        // const headers={"Authorization":`Bearer ${auth.jwtToken}`}
       
        const ticketRequestObj={ticketType,problemDescription,employee,asset}
        console.log("assetId",id);

        RaiseTicketService.raiseTicket(auth.jwtToken,ticketRequestObj).then((response)=>{
            console.log("response-recieved from api",JSON.stringify(response))
            console.log("response",response.data)
            navigate('/category')
        });






        
    }




  return (
    <div>
        <div className="formbold-main-wrapper">
  {/* Author: FormBold Team */}
  {/* Learn More: https://formbold.com */}
  <div className="formbold-form-wrapper">
    <form action="" onSubmit={(e) => submitTicketDetails(e)}>
      <div className="formbold-mb-5">
        <label htmlFor="name" className="formbold-form-label"> Problem Description </label>
        <input type="text" name="name" id="name" value={problemDescription} placeholder="Full Name" className="formbold-form-input" onChange={(e) => setProblemDescription(e.target.value)} />
      </div>
      <div className="formbold-mb-5">
        <label htmlFor="email" className="formbold-form-label"> Ticket-Type </label>
        <select className="form-select" aria-label="Default select example" value={ticketType} onChange={(e) => setTicketType(e.target.value)}>
  <option selected>Select Ticket type</option>
  <option value="ISSUE">ISSUE</option>
</select>
      </div>
      {/* <div className="formbold-mb-5">
        <label htmlFor="subject" className="formbold-form-label"> Description </label>
        <input type="text" name="subject" id="subject" placeholder="Ticket-details" className="formbold-form-input" />
      </div> */}
      <div>
        <button className="formbold-btn">Submit</button>
      </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default RaiseTicket