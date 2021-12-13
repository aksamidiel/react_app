import React from "react";
import s from './Post.module.css'


const Post=(props)=>{

   
    return <div className={s.item}>
            <img src='https://www.blast.hk/attachments/68493/'/>

           {props.message}
            <div>
            <span>numLike-</span>{props.like}
            <span>numDislike-</span>{props.dislike}
            </div>
        </div>
          
        
}

export default Post