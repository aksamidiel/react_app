import React from "react";
import Friend from './Friend/Friend'
import classes from './Friends.module.css';

const Friends =(props) =>{

    let friendsElements = props.state.friends.map(
        (fr) => <Friend friend={fr.name}/>) // маппинг сообщений

    

return(
    <div className = {classes.friend}>
       { friendsElements  }
    </div>
)
}
export default Friends