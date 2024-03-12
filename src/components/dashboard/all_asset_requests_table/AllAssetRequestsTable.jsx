import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useContext } from 'react';
import AuthContext from '../../../context/AuthContext';
import { useState } from 'react';
import { useEffect } from 'react';
import TicketService from '../../../services/ticket_service/TicketService';
import './AllAssetRequestsTable.css'
import SmallButton from '../small_button/SmallButton';
export default function AllAssetRequestsTable() {

  const [activeAssetRequests, setActiveAssetRequests] = useState([])

  const { auth } = useContext(AuthContext)
  const [totalTickets, setTotalTickets] = useState(0)

  useEffect(() => {
    const fetchActiveAssetRequests = async () => {
      try {
        const response = await TicketService.getAllTickets("IN_PROCESS", auth.jwtToken);
        const filteredTickets = response.data.filter(ticket => ticket.ticketType === "ISSUE")
        setActiveAssetRequests(filteredTickets);
        setTotalTickets(response.data.length)
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching tickets: ", error);
      }
    };

    fetchActiveAssetRequests();
  }, [auth.jwtToken]);


  return (
    <div className='aart-container' style={{
      display: 'flex', flexDirection: 'column', width: '100%', height: "calc(100vh - 100px)",
      overflowY: "auto"
    }}>
      <br />
      <h3>All Asset Request Tickets</h3>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table" >
          <TableHead>
            <TableRow>
              <TableCell align="center"><b>Ticket Id</b></TableCell>
              <TableCell align="center"><b>Requested Asset</b></TableCell>
              <TableCell align="center"><b>Model</b></TableCell>
              <TableCell align="center"><b>Category</b></TableCell>
              <TableCell align="center"><b>Reason For Request</b></TableCell>
              <TableCell align="center"><b>Requested By</b></TableCell>
              <TableCell align="center"><b>Approve</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activeAssetRequests.map((req) => (
              <TableRow key={req.ticketId}>
                <TableCell align="center">{req.ticketId}</TableCell>
                <TableCell align="center">{req.asset.category.categoryName}</TableCell>
                <TableCell align="center">{req.asset.model}</TableCell>
                <TableCell align="center">{req.asset.category.categoryType}</TableCell>
                <TableCell align="center">{req.problemDescription}</TableCell>
                <TableCell align="center">{req.employee.firstName + " " + req.employee.lastName}</TableCell>
                <TableCell align="center"><SmallButton buttonText="APPROVE"/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
          {/* <Button  type="submit" color="primary" sx={ { borderRadius: 0, color: 'black', backgroundColor: "#b4b4b4"} }>Create new category</Button> */}
        </div>
      </TableContainer>
    </div>
  );
}