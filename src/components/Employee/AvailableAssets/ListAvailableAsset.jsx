import React, { useContext, useEffect, useState } from 'react'
import '../AvailableAssets/ListAvailableAsset.css'
import ListAssetsService from '../../../services/employeeService/ListAssetsService'
import AuthContext from '../../../context/AuthContext'
import { Link, useParams } from 'react-router-dom'




const ListAvailableAsset = () => {

        const[assets,setAssets]=useState([])
        const {auth}=useContext(AuthContext)

        const {id}=useParams()
    
        useEffect(() => {
            console.log("jwtToken",auth.jwtToken);
            ListAssetsService.getAvailableAssets(id,auth.jwtToken).then((response)=>{
                setAssets(response.data);
                console.log("available assets list",JSON.stringify(response.data))
            });
          }, []);
        
        
  return (
    <div>
        {/* <h1>{auth.jwtToken}</h1> */}
    <table className="table">
<thead>
<tr>
  <th scope="col">Image</th>
  <th scope="col">Asset ID</th>
  <th scope="col">Model</th>
  <th scope="col">Status</th>
  <th scope="col">Category</th>
  <th scope="col">Actions</th>
  

</tr>
</thead>
<tbody>
{
            assets.map((assets,key)=><tr key={key}>
    
{/* <tr> */}
  {/* <th scope="row">1</th> */}
  <td>image</td>
  <td>{assets.assetId}</td>
  <td>{assets.model}</td>
  <td><span id='status'>Available</span></td>
  <td>macbook</td>
  <td><Link to={`/raise-ticket/${assets.assetId}`}><button id='request'>Request</button></Link></td>
</tr>)
}
</tbody>
</table>

</div>
  )
}


export default ListAvailableAsset