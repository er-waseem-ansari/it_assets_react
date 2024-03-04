import React from 'react'
import './WelcomePanel.css'

function WelcomePanel() {
  return (
    <div className='welcome-container'>
        <div className='welcome-left'>
            <h6>Good morning, Waseem Ansari</h6>
            <span>Navigate and monitor your asset management progress.</span>
        </div>
        <div className='welcome-right'>
            <button className='add-asset-button'>+ Add asset</button>
        </div>
    </div>
  )
}

export default WelcomePanel