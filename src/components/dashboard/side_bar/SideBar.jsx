import React, { useContext, useState } from 'react';
import './SideBar.css'; // Import your CSS file here
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CategoryIcon from '@mui/icons-material/Category';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import itAssetsLogo from '../../../images/it-assets-logo.png'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import HomeIcon from '@mui/icons-material/Home';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';

const SideBar = () => {
  const [mini, setMini] = useState(true);
  const {setAuth} = useContext(AuthContext)
  const {auth} = useContext(AuthContext)
  const handleMouseEnter = () => {
    setMini(false);
  };

  const handleMouseLeave = () => {
    setMini(true);
  };

  const logout = () =>{
    setAuth({})
  }

  return (
    <div
      id="mySidebar"
      className={`sidebar ${mini ? 'mini' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={itAssetsLogo} alt="" className='it-assets-logo'/>
      <br />
      <br />
      {/* <a href="#"><span><AccountCircleIcon/><span className="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About</span></span></a><br /> */}

      <Link to={auth.role === "ADMIN"? '/admin' : '/employee'} > <HomeIcon sx={{fontSize: 30}}/> <span>&nbsp;&nbsp;&nbsp;Home</span></Link><br />
      <Link to={auth.role === "ADMIN"? '/categories' : '/category'} ><WidgetsIcon/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categories</Link><br />
      <Link to={'/all-active-tickets'}><ConfirmationNumberIcon/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tickets</Link><br />
      <Link to={'/issue-asset'}><ChecklistRtlIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Issued Assets</Link>
      <Link to={'/auth'}><LogoutIcon /> <button onClick={logout} style={{marginTop: "200px", textDecoration: 'none', border: "0px", color: "grey"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logout</button></Link>
    </div>
  );
};

export default SideBar;
