import React, { useContext, useState } from 'react';
import './SideBar.css'; // Import your CSS file here
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CategoryIcon from '@mui/icons-material/Category';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import itAssetsLogo from '../../../images/it-assets-logo.png'
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext';

const SideBar = () => {
  const [mini, setMini] = useState(true);
  const {setAuth} = useContext(AuthContext)
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
      <a href="#"><span><AccountCircleIcon/><span className="icon-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About</span></span></a><br />
      <a href="#"><WidgetsIcon/><span className="icon-text"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Services</a><br />
      <a href="#"><CategoryIcon/><span className="icon-text"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clients</a><br />
      <a href="#"><ContactPageIcon/><span className="icon-text"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact</a>
      <Link to={'/auth'}><button onClick={logout}>Logout</button></Link>
      <Link to={"/issue-asset"}>Assigned</Link>
      <Link to={"/category"}>Category</Link>
    </div>
  );
};

export default SideBar;
