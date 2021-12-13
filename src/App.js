import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Nav from './components/NavBar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';



const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />

     {/* <Profile />*/}
      <div class='app-wrapper-content'>
        <Dialogs/>
      </div>
    </div>
  );
}



export default App;
