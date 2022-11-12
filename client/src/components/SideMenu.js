import React, { useEffect, useState } from "react";
import logo from "../assets/logo/image 4.png";

import * as icons from '@material-ui/icons'

import MenuItem from "./MenuItem";
import DashboardIcon from '@mui/icons-material/Dashboard';


export const menuItems = [
  {
    label: "Home",
    exact: true,
    to: "/",
    icon: "bi bi-speedometer2",
  },
  {
    label: "Dashboard",
    exact: true,
    to: `/content`,
    baseClassName: 'DashboardIcon',
   

    icon:  "bi bi-speedometer2",
    
  },
  { label: "Messages", to: `/design`, icon : "bi bi-speedometer2" },
  {
    label: "Gallery",
    exact: true,
    to: `/content-2`,
    icon:  "bi bi-speedometer2",
    
  },
  { label: "Calender", to: `/design-2`, icon:  "bi bi-speedometer2" },
  { label: "Activity", to: `/design-3`, icon:  "bi bi-speedometer2" },
  { label: "Documents", to: `/design-4`, icon:  "bi bi-speedometer2" },
]; 

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

 
  
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className="cont">
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="plinth-2k23"  />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      
 

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.label}
              exact={menuItem.exact}
              to={menuItem.to}
              
             // iconClassName={menuItem.iconClassName}

              Icon = {menuItem.icon}


              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}



         
          
        </ul>
      </div>

      <div className="mode">
  Light mode
  </div>
      
    </div>

    </div>
  );
};

export default SideMenu;