import React, { useContext, useEffect, useState } from 'react'
import './WelcomePanel.css'
import { Link } from 'react-router-dom'
import AuthContext from '../../../context/AuthContext'

function WelcomePanel() {
  const [name, setName] = useState("")
  const {auth} = useContext(AuthContext)
  useEffect(()=>{
    setName(auth.firstName + " " + auth.lastName)
  })

  return (
    <div className='welcome-container'>
        <div className='welcome-left'>
            <h6>Good morning, {name}</h6>
            <span>Navigate and monitor your asset management progress.</span>
        </div>
        <div className='welcome-right'>
          <Link to={auth.role === "ADMIN"? '/categories' : '/category'}><button className='add-asset-button'>{auth.role === "ADMIN"? "+ Add Asset" : "Issue New Asset"}</button></Link>
            
        </div>
    </div>
  )
}

export default WelcomePanel