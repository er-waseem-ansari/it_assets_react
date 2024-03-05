import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(id, name, type, available, total) {
  return { id, name, type , available, total };
}

const rows = [
  createData(1, "Mouse", "Hardware", 128, 520),
  createData(2, "Server", "Hardware", 5, 2999),
  createData(3, "IDE Software", "Software", 20, 199),
  createData(4, "Laptop", "Computers", 15, 1299),
  createData(9, "Tablet", "Mobile Devices", 30, 399),
  
  

];

export default function CategoryTable() {
  return (
    // <div style={{ height: '500px', overflowY: 'auto' }}>
    <>
    <h3>Categories</h3>
    <br />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table" >
        {/* <caption>
          <button>Create a new category</button>
        </caption> */}
        <TableHead>
          <TableRow>
          <TableCell align="center"><b>Category Id</b></TableCell>
            <TableCell><b>Category Name</b></TableCell>
            <TableCell align="center"><b>Category Type</b></TableCell>
            <TableCell align="center"><b>Available Quantity</b></TableCell>
            <TableCell align="center"><b>Total Quantity</b></TableCell>          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
                <TableCell align="center">{row.id}</TableCell>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.available}</TableCell>
              <TableCell align="center">{row.total}</TableCell>            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <button>Create new category</button> */}
      <div style={{ display:"flex", justifyContent: "center", padding: "10px" }}>
      <Button  type="submit" color="primary" sx={ { borderRadius: 0, color: 'black', backgroundColor: "#b4b4b4"} }>Create new category</Button>
      </div>
    </TableContainer>
    </>
    // </div>
  );
}