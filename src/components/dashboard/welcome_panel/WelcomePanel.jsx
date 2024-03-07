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
          <Link to={'/categories'}><button className='add-asset-button'>+ Add asset</button></Link>
            
        </div>
    </div>
  )
}

export default WelcomePanel