import React from "react";
import classes from './Post.module.css'


const Post=(props)=>{

   
    return <div className={classes.item}>
            <img src='https://www.blast.hk/attachments/68493/'/>

           {props.message}
            <div>
            <span>numLike: </span>{props.likesCount}
            <br/>
            <span>numDislike: </span>{props.dislikesCount}
            </div>
        </div>
          
        
}

export default Post