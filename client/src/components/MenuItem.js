import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
/**
 * @author
 * @function MenuItem
 **/

const MenuItem = (props) => {
  const { name,  Icon, onClick, to, exact } = props;
  const [expand, setExpand] = useState(false);

  return (
    <li onClick={props.onClick}>
      <Link
        exact
        to={to}
        // onClick={() => {
        //   setExpand((e) => !e);
        // }}
        className={`menu-item`}
      >
        <div className="menu-icon">
        
        {/* <i class={Icon}></i> */}
        <Icon />
   
        </div>
        <span>{name}</span>
      </Link>
      
    
    
    </li>
  

  );
};

export default MenuItem;