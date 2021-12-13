import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts=()=>{
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add_post</button>

            </div>
            <div className={s.posts}>
                <Post  message = 'some text' like='10 ' dislike='7 '/>
                <Post  message = 'something post' like='7 ' dislike='4 '/>
            </div>
        </div>
    )
}

export default MyPosts