import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Nav from './components/NavBar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, Routes} from "react-router-dom";



const App = (props) => {

  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div class='app-wrapper-content'>
          <Routes>
            {/*<Route path='/profile' element={<Profile/>}/> 
            <Route path='/dialogs' element={<Messages/>}/>
            <Route path='/news' element={<News/>}/> 
            <Route path='/settings' element={<Settings/>}/> */}   

            <Route path='/profile' element={<Profile posts = {props.posts}/>}/>
            <Route path='/dialogs' element={<Dialogs dialogs = {props.dialogs} messages={props.messages}/>}/>
            <Route path='/news' element={<News news = {props.news}/>}/> 
            <Route path='/settings' element={<Settings settings = {props.settings}/>}/> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
