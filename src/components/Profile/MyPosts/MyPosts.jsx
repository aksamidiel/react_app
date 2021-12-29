import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts=(props)=>{
    let postData = [
        {id:1, message: 'first post', likesCount: 12}, 
        {id:2, message: 'second post', likesCount: 10},
        {id:3, message: 'third post', likesCount: 9}, 
        {id:4, message: 'fourth post', likesCount: 3},
        {id:5, message: 'fifth post', likesCount: 18}, 
        {id:6, message: 'six post', likesCount: 20},
        ]                   

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add_post</button>
                </div>

            </div>
            <div className={s.posts}>
                <Post  message = {postData[0].message} likesCount = {postData[0].likesCount}/>
                <Post  message = {postData[1].message} likesCount = {postData[1].likesCount}/>
                <Post  message = {postData[2].message} likesCount = {postData[2].likesCount}/>
                <Post  message = {postData[3].message} likesCount = {postData[3].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts