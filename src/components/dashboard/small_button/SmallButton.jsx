import React from 'react'
import './SmallButton.css'
function SmallButton(props) {
  const { buttonText, onClick } = props;
  return (
    <button className='small-button' onClick={onClick}>{buttonText}</button>
  )
}

export default SmallButton