import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo =() =>{
    return (
    <div>
      <div>
        <img src='https://wonder-day.com/wp-content/uploads/2020/04/wonder-day-images-rainbow-37-1024x576.jpg' />Main content
      </div>
      <div className={classes.descriptionBlock}>
        ava + descriptiond
      </div>

    </div>)
}


export default ProfileInfo;