import React, { useContext, useState } from 'react'
import AuthContext from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import CategoryService from '../../../services/employeeService/CategoryService'

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState('')
  const [categoryType, setCategoryType] = useState('')
  const navigate = useNavigate()
  const { auth } = useContext(AuthContext)

  const submitTicketDetails = (e) => {
    e.preventDefault();
    const categoryObject = {
        "categoryName": categoryName,
        "categoryType": categoryType
    }

    CategoryService.createCategory(categoryObject, auth.jwtToken).then((response) => {
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
            <select className="form-select" aria-label="Default select example" value={categoryType} onChange={(e) => setCategoryType(e.target.value)}>
              <option value="" disabled>Select Category type</option>
              <option value="HARDWARE">HARDWARE</option>
              <option value="SOFTWARE">SOFTWARE</option>
              
            </select>
          </div>
          <div className="formbold-mb-5">
            <label htmlFor="name" className="formbold-form-label"> Category Name: </label>
            <input type="text" name="name" id="name" value={categoryName} placeholder="Category Name" className="formbold-form-input" onChange={(e) => setCategoryName(e.target.value)} />
          </div>
          <div>
            <button className="formbold-btn">Create</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default CreateCategory