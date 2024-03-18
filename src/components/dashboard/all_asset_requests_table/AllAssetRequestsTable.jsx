import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

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
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

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


export default function AllAssetRequestsTable() {

  const [activeAssetRequests, setActiveAssetRequests] = useState([])

  const { auth } = useContext(AuthContext)
  const [totalTickets, setTotalTickets] = useState(0)
  const [approveRequestCalled, setApproveRequestCalled] = useState(false);

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
  }, [auth.jwtToken, approveRequestCalled]);

  function approveRequest(ticketId) {

    TicketService.approveRequest(ticketId, auth.jwtToken).then((response) => {
      console.log("response of approve request: ", response.data)
      setApproveRequestCalled(true);
    })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }


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
              <StyledTableCell align="center"><b>Ticket Id</b></StyledTableCell>
              <StyledTableCell align="center"><b>Requested Asset</b></StyledTableCell>
              <StyledTableCell align="center"><b>Model</b></StyledTableCell>
              <StyledTableCell align="center"><b>Category</b></StyledTableCell>
              <StyledTableCell align="center"><b>Reason For Request</b></StyledTableCell>
              <StyledTableCell align="center"><b>Requested By</b></StyledTableCell>
              <StyledTableCell align="center"><b>Approve</b></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activeAssetRequests.map((req) => (
              <StyledTableRow key={req.ticketId}>
                <StyledTableCell align="center">{req.ticketId}</StyledTableCell>
                <StyledTableCell align="center">{req.asset.category.categoryName}</StyledTableCell>
                <StyledTableCell align="center">{req.asset.model}</StyledTableCell>
                <StyledTableCell align="center">{req.asset.category.categoryType}</StyledTableCell>
                <StyledTableCell align="center">{req.problemDescription}</StyledTableCell>
                <StyledTableCell align="center">{req.employee.firstName + " " + req.employee.lastName}</StyledTableCell>
                <StyledTableCell align="center"><SmallButton buttonText="APPROVE" onClick={() => approveRequest(req.ticketId)} /></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}