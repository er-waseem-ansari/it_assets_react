import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../context/AuthContext'




const ListAvailableAssets = () => {
        const {auth}=useContext(AuthContext)
        
        
  return (
    <div>
        <h1>{auth.jwtToken}</h1>
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
    
<tr>
  {/* <th scope="row">1</th> */}
  <td>image</td>
  <td>Mark</td>
  <td>Otto</td>
  <td><span id='status'>Available</span></td>
  <td>macbook</td>
  <td><button id='request'>Request</button></td>
</tr>
</tbody>
</table>

</div>
  )
}


export default ListAvailableAssets