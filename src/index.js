import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [   // данные, которые потом будем с бэка подтягивать
  {id:1, message: 'first post', likesCount: 12}, 
  {id:2, message: 'second post', likesCount: 10},
  {id:3, message: 'third post', likesCount: 9}, 
  {id:4, message: 'fourth post', likesCount: 3},
  {id:5, message: 'fifth post', likesCount: 18}, 
  {id:6, message: 'six post', likesCount: 20},
  ] 

  let dialogs = [
    {id:1, name: 'Dimych'}, 
    {id:2, name: 'Andrey'},
    {id:3, name: 'Sveta'}, 
    {id:4, name: 'Igor'},
    {id:5, name: 'Sasha'}, 
    {id:6, name: 'Alexey'},
    ]

  let messages = [
    {id:1, message: 'Hi'}, 
    {id:2, message: 'Hello'},
    {id:3, message: 'Somebody'}, 
    {id:4, message: 'Something'},
    {id:5, message: 'how do you do?'}, 
    {id:6, message: 'This is a nice job'},
    ]        

ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs={dialogs} messages={messages} />
    
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
