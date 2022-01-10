import React from 'react';
import classes from './../Dialogs.module.css'


        
const Message = (props)=>{

    let addPost = () =>{
        let text = newPostElement.current.value; // получаем значение из ссылки
        alert(text)
    }

    let newPostElement = React.createRef() // ссылка на которую привязывается textarea
   
    return (
        <div className = {classes.dialog}>
        <h3>Post</h3>
        <div>
            <div>
                 <textarea ref = {newPostElement}></textarea>  
             </div>
        <div>
            <button onClick = { addPost }>Add_post</button>
        </div>

    </div>
</div>)
}

export default Message;