import React, { useContext, useEffect } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ReplyIcon from '@mui/icons-material/Reply';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import './AssetOverview.css'
import AuthContext from '../../../context/AuthContext';


function AssetOverview() {
  const {auth} = useContext(AuthContext)
  useEffect


  return (
    <div className='ao-container'>
      <div className="ao-card-container">
        <div className="ao-card">
          <span><CheckIcon sx={{ fontSize: 80 ,marginLeft: "30px"}}/></span>
          <span>Issued Assets <br /> 5</span>
        </div>

        <div className="ao-card">
          <span><ReplyIcon sx={{ fontSize: 50 }}/></span>
          <span>Returned Assets <br /> 10 </span>
        </div>

        <div className="ao-card">
          <span><HourglassTopIcon sx={{ fontSize: 50 }}/></span>
          <span>Active Tickets <br /> 12 </span>
        </div>
      </div>
      <div className="raise-new-ticket">+ Raise A New Ticket</div>
      <div className='return-issue'>
        <span>Return Issued Assets</span>
        <span>Issue A New Asset</span>
      </div>
    </div>
  )
}

export default AssetOverview