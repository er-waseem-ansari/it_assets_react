import  { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../context/AuthContext'
import IssuedAssetService from '../../../services/employeeService/IssuedAssetService';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { Button } from '@mui/material';
// import './CategoryTable.css'




import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
const IssuedAsset = () => {

    const[issueAsset,setIssueAsset]=useState([])
    const {auth}=useContext(AuthContext)

    console.log("auth response",auth);
    


    useEffect(() => {
        console.log("jwtToken",auth.jwtToken);
        IssuedAssetService.getIssuedAsset(auth.employeeId,auth.jwtToken).then((response)=>{
            setIssueAsset(response.data);
            console.log("available assets list",JSON.stringify(response.data))
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
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table" >
        <TableHead>
          <StyledTableRow>
          <StyledTableCell align="center"><b>Issue Id</b></StyledTableCell>
            <StyledTableCell align="center"><b>Issue Date</b></StyledTableCell>
            <StyledTableCell align="center"><b>Model</b></StyledTableCell>
            <StyledTableCell align="center"><b>Category</b></StyledTableCell>
            <StyledTableCell align="center"><b>Category Type</b></StyledTableCell>
            <StyledTableCell align="center"><b>Available Quantity</b></StyledTableCell>
            <StyledTableCell align="center"><b>Actions</b></StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {issueAsset.map((issueAsset) => (
            
              <StyledTableRow key={issueAsset.issuedAssetsid}>
                
                <StyledTableCell align="center">{issueAsset.issuedAssetsid}</StyledTableCell>
                <StyledTableCell align="center">{issueAsset.issueDate}</StyledTableCell>
                <StyledTableCell align="center">{issueAsset.asset.model}</StyledTableCell>
                <StyledTableCell align="center">{issueAsset.asset.category.categoryName}</StyledTableCell>
                <StyledTableCell align="center">{issueAsset.asset.category.categoryType}</StyledTableCell>
                <StyledTableCell align="center">{issueAsset.asset.category.availableQuantity}</StyledTableCell>
                <StyledTableCell align="center"><Link to={`/raise-ticket/${issueAsset.asset.assetId}`} className="btn btn-primary">Return</Link></StyledTableCell>
          
                {/* <TableCell align="center"><Link to={`/raise-ticket/${issueAsset.asset.assetId}`} className="btn btn-primary">view</Link></TableCell> */}
                
                
              </StyledTableRow>

              
            
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    </div>
  )
}

export default IssuedAsset