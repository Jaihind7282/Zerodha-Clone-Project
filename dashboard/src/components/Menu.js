import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration: "none"}} to="/" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu===0? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>  
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/orders" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu===0? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link> 
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/holdings" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu===0? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link> 
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/positions" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu===0? activeMenuClass : menuClass}>
                Position
              </p>
            </Link> 
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/funds" onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu===0? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link> 
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/apps" onClick={() => handleMenuClick(6)}>
              <p className={selectedMenu===0? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link> 
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar"><img src="jaisingh.jpeg" style={{width: "2rem", borderRadius : "50%"}}/></div>
          <p className="username"><b>JAI</b></p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
