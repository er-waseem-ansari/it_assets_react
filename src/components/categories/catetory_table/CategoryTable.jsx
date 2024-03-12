import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import './CategoryTable.css'
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../../../context/AuthContext';
import CategoryService from '../../../services/employeeService/CategoryService';
import { useEffect } from 'react';
import SmallButton from '../../dashboard/small_button/SmallButton';
import { Link } from 'react-router-dom';


export default function CategoryTable() {

  const[categoryList,setCategoryList]=useState([]);
  const {auth}=useContext(AuthContext)
    useEffect(() => {
        CategoryService.getAllCategory(auth.jwtToken).then((response)=>{
            setCategoryList(response.data);
            
            console.log("Category list data response : " ,categoryList)
        });
    }, [])

    


  return (
    <div style={{display: 'flex', flexDirection: 'column', width: "100%", height: "92vh"}}>
      <h3>Categories</h3>
      <div style={{ display:"flex", justifyContent: "space-between", marginBottom: "5px"}}>
      <p>(Select a category to add assets)</p>
        <SmallButton buttonText="Create New Category"/>
      </div>
    
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table" >
        <TableHead>
          <TableRow>
          <TableCell align="center"><b>Category Id</b></TableCell>
            <TableCell align="center"><b>Category Name</b></TableCell>
            <TableCell align="center"><b>Category Type</b></TableCell>
            <TableCell align="center"><b>Available Quantity</b></TableCell>
            <TableCell align="center"><b>Total Quantity</b></TableCell>
            <TableCell align="center"><b>Add Asset</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categoryList.map((category) => (
            
              <TableRow key={category.categoryId}>
                
                <TableCell align="center">{category.categoryId}</TableCell>
                <TableCell align="center">{category.categoryName}</TableCell>
                <TableCell align="center">{category.categoryType}</TableCell>
                <TableCell align="center">{category.availableQuantity}</TableCell>
                <TableCell align="center">{category.totalQuantity}</TableCell>
          
                <TableCell align="center"><Link to={`/add-asset/${category.categoryId}`}><SmallButton buttonText = "Add asset"/></Link></TableCell>
                
              </TableRow>

              
            
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    </div>
  );
}