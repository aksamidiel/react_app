import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Messages.module.css';


const DialogItem =(props) => {
    let path = "/dialogs/" + props.id;
    return <div className={classes.dialog +" "+classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props)=>{
    return (
    <div className = {classes.dialog}>{props.message}</div>)
}

const Messages = (props)=>{
    return(
        <div className = {classes.dialogs}>
            <div className = {classes.dialogItems}>
               <DialogItem name="Aksamidiel" id="1" />
               <DialogItem name="Oleg" id="2" />
               <DialogItem name="Sebastian" id="3" />
               <DialogItem name="Malic" id="4" />
               <DialogItem name="Peter" id="5" />
               <DialogItem name="Lena_Golovach" id="6" />
            </div>
            <div className={classes.messages}>
                <Message message="Hi" />
                <Message message="How is your ?" />
                <Message message="Yo" />
            </div>
        </div>
    )
}

export default Messages;