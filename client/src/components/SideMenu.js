import React, { useEffect, useState } from "react";
import logo from "../assets/logo/image 4.png";

import * as icons from '@material-ui/icons'

import MenuItem from "./MenuItem";
import DashboardIcon from '@mui/icons-material/Dashboard';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
export const menuItems = [
  {
    label: "Home",
    exact: true,
    to: "/",
    icon: HomeRoundedIcon,
  },
  {
    label: "Dashboard",
    exact: true,
    to: `/content`,
    baseClassName: 'DashboardIcon',
    icon: HomeRoundedIcon,
  },
  {
    label: "Messages",
    to: `/design`,
    icon: HomeRoundedIcon
  },
  {
    label: "Gallery",
    exact: true,
    to: `/content-2`,
    icon: HomeRoundedIcon,
  },
  {
    label: "Calender",
    to: `/design-2`,
    icon: HomeRoundedIcon
  },
  {
    label: "Activity",
    to: `/design-3`,
    icon: HomeRoundedIcon
  },
  {
    label: "Documents",
    to: `/design-4`,
    icon: HomeRoundedIcon
  },
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
            <img src={logo} alt="plinth-2k23" />
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
                Icon={menuItem.icon}
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