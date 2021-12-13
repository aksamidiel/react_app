import React from "react";
import classes from './NavBar.module.css';



let c1 = 'item'
let c2 = 'active'
let cl1 = c1+ ' '+c2
let cl1_new = `${c1} ${c2}`


const Nav =() =>{
    return <nav className={classes.nav}>
    <div>
      <a className={classes.item}>Profile</a>
    </div>
    <div>
      <a className={classes.item}>Messages</a>
    </div>
    <div>
      <a className={classes.item}>News</a>
    </div>
    <div>
      <a className={classes.item}>Settings</a>
    </div>
  </nav>
}


export default Nav