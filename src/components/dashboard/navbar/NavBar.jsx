import React from 'react'
import './NavBar.css'
import "bootstrap-icons/font/bootstrap-icons.css";
function NavBar() {
  return (
    <div className='big-nav'>
          <div className="big-nav-left">
            <input type="text" placeholder="Search something" name="search"/>
            <button type="submit"><i className="bi bi-search"></i></button>
          </div>

          <div className="big-nav-right">
          <i className="bi bi-person-circle"></i>
            Waseem Ansari
          </div>
            
    </div>
  )
}

export default NavBar