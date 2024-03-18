import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
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
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export default function CategoryTable() {

  const[categoryList,setCategoryList]=useState([]);
  const {auth}=useContext(AuthContext)
    useEffect(() => {
        CategoryService.getAllCategory(auth.jwtToken).then((response)=>{
            setCategoryList(response.data);
            
            console.log("Category list data response : " ,categoryList)
        });
    }, [])

    
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#b4b4b4",
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));


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
          <StyledTableRow>
          <StyledTableCell align="center"><b>Category Id</b></StyledTableCell>
            <StyledTableCell align="center"><b>Category Name</b></StyledTableCell>
            <StyledTableCell align="center"><b>Category Type</b></StyledTableCell>
            <StyledTableCell align="center"><b>Available Quantity</b></StyledTableCell>
            <StyledTableCell align="center"><b>Total Quantity</b></StyledTableCell>
            <StyledTableCell align="center"><b>Add Asset</b></StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {categoryList.map((category) => (
            
              <StyledTableRow key={category.categoryId}>
                
                <StyledTableCell align="center">{category.categoryId}</StyledTableCell>
                <StyledTableCell align="center">{category.categoryName}</StyledTableCell>
                <StyledTableCell align="center">{category.categoryType}</StyledTableCell>
                <StyledTableCell align="center">{category.availableQuantity}</StyledTableCell>
                <StyledTableCell align="center">{category.totalQuantity}</StyledTableCell>
          
                <TableCell align="center"><Link to={`/add-asset/${category.categoryId}`}><SmallButton buttonText = "Add asset"/></Link></TableCell>
                
              </StyledTableRow>

              
            
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    </div>
  );
}