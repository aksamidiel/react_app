import React from "react";
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts=(props)=>{
        
    let postsElements = props.posts.map(p => <Post  message = {p.message} likesCount = {p.likesCount}
                                        dislikesCount = {p.dislikesCount}/>)

    let addPost = () =>{
        let text = newPostElement.current.value; // получаем значение из ссылки
        console.log(text)
    }

    let newPostElement = React.createRef() // ссылка на которую привязывается textarea

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref = {newPostElement}></textarea>  
                </div>
                <div>
                    <button onClick = { addPost }>Add_post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts