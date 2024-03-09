import React, { useContext,useEffect, useState } from 'react'
import AuthContext from '../../../context/AuthContext'
import CategoryService from '../../../services/employeeService/CategoryService'
import { Link } from 'react-router-dom';

const Listcategory = () => {

    const[category,setCategory]=useState([]);
    const {auth}=useContext(AuthContext)
    useEffect(() => {
        console.log("jwtToken",auth.jwtToken);
        CategoryService.getAllCategory(auth.jwtToken).then((response)=>{
            setCategory(response.data);
            console.log("available assets list",JSON.stringify(response.data))
        });
    }, [])

  return (
    <div><table className="table">
       
    <thead>
    <tr>
      <th scope="col">category_id</th>
      <th scope="col">category_name</th>
      <th scope="col">total_quantity</th>
      <th scope="col">available_quantity</th>
      <th scope="col">category_type</th>
      <th scope="col">Actions</th>
      
    
    </tr>
    </thead>
    <tbody>
        {
            category.map((category,key)=><tr key={key}>
        
   {/* <tr> */}
      {/* <th scope="row">1</th> */}
      <td>{category.categoryId}</td>
      <td>{category.categoryName}</td>
      <td>{category.totalQuantity}</td>
      <td><span>{category.availableQuantity}</span></td>
      <td>{category.categoryType}</td>
      <td> <Link to={`/show/${category.categoryId}`} className="btn btn-primary">view</Link></td>
    </tr>)
}

    </tbody>
    </table>
    </div>
  )
}

export default Listcategory