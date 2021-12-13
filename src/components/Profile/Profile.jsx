import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css'

const Profile =() =>{
    return (
    <div>
      <div>
      <img src='https://wonder-day.com/wp-content/uploads/2020/04/wonder-day-images-rainbow-37-1024x576.jpg' />Main content
      </div>
      <div>
      ava + descriptiond
    </div>
    <MyPosts/>

    </div>)
}


export default Profile