import React from "react";
import { NavLink } from "react-router-dom";
import classes from './NavBar.module.css';


const Nav =() =>{
    return <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to="/profile" activeclassname = {classes.activeLink}>Profile</NavLink>
    </div>
    <div className={`${classes.item} ${classes.active}`}>
      <NavLink to="/dialogs" activeclassname = {classes.activeLink}>dialogs</NavLink>
    </div>
    <div className={`${classes.item} ${classes.active}`}>
      <NavLink to="/friends">friends</NavLink>
    </div>
    <div className={`${classes.item} ${classes.active}`}>
      <NavLink to="/news">news</NavLink>
    </div>
    <div className={`${classes.item} ${classes.active}`}>
      <NavLink to="/settings">settings</NavLink>
    </div>
  </nav>
}


export default Nav