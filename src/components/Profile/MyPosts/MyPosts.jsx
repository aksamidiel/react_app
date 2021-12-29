import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts=(props)=>{
    let posts = [   // данные, которые потом будем с бэка подтягивать
        {id:1, message: 'first post', likesCount: 12}, 
        {id:2, message: 'second post', likesCount: 10},
        {id:3, message: 'third post', likesCount: 9}, 
        {id:4, message: 'fourth post', likesCount: 3},
        {id:5, message: 'fifth post', likesCount: 18}, 
        {id:6, message: 'six post', likesCount: 20},
        ]  
        
    let postsElements = posts.map(p => <Post  message = {p.message} likesCount = {p.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts