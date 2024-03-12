import React, { useContext, useEffect, useState } from 'react'
import './NavBar.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import AuthContext from '../../../context/AuthContext';
function NavBar() {
  const [name, setName] = useState("")
  const {auth} = useContext(AuthContext)
  useEffect(()=>{
    setName(auth.firstName + " " + auth.lastName)
  },[name])
  return (
    <div className='big-nav'>
          <div className="big-nav-left">
            <input type="text" placeholder="Search something" name="search"/>
            <button type="submit"><i className="bi bi-search"></i></button>
          </div>

          <div className="big-nav-right">
          <i className="bi bi-person-circle"></i>
            {name}
          </div>
            
    </div>
  )
}

export default NavBar