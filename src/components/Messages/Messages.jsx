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

    let dialogs = [
                       {id:1, name: 'Dimych'}, 
                       {id:2, name: 'Andrey'},
                       {id:3, name: 'Sveta'}, 
                       {id:4, name: 'Igor'},
                       {id:5, name: 'Sasha'}, 
                       {id:6, name: 'Alexey'},
                       ]

    let messages = [
                       {id:1, message: 'Hi'}, 
                       {id:2, message: 'Hello'},
                       {id:3, message: 'Somebody'}, 
                       {id:4, message: 'Something'},
                       {id:5, message: 'how do you do?'}, 
                       {id:6, message: 'This is a nice job'},
                       ]        
                        
    let dialogsElemets = dialogs.map(
                                (d) => 
                                <DialogItem name={d.name} id={d.id}/>) // маппинг диалогов

    let messagesElements = messages.map(
                                (m) => <Message message={m.message}/>) // маппинг сообщений
    

    return(
        <div className = {classes.dialogs}>
            <div className = {classes.dialogItems}>
                
                { dialogsElemets  }
                   
            </div>
            <div className={classes.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Messages;