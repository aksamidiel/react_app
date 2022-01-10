import React from 'react';
import classes from './../Friends.module.css'



const Friend = (props)=>{
    return (
    <div className = {classes.friend}>{props.name}</div>)
}

export default Friend;