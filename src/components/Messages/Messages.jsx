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

    let dialogsData = [
                       {id:1, name: 'Dimych'}, 
                       {id:2, name: 'Andrey'},
                       {id:3, name: 'Sveta'}, 
                       {id:4, name: 'Igor'},
                       {id:5, name: 'Sasha'}, 
                       {id:6, name: 'Alexey'},
                       ]

    let messagesData = [
                       {id:1, message: 'Hi'}, 
                       {id:2, message: 'Hello'},
                       {id:3, message: 'Somebody'}, 
                       {id:4, message: 'Something'},
                       {id:5, message: 'how do you do?'}, 
                       {id:6, message: 'This is a nice job'},
                       ]                       
    
    

    return(
        <div className = {classes.dialogs}>
            <div className = {classes.dialogItems}>
               <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
               <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
               <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
               <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
               <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
               <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
                <Message message={messagesData[4].message} />
                <Message message={messagesData[5].message} />
            </div>
        </div>
    )
}

export default Messages;