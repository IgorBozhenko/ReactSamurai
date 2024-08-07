import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Navbar/Profile/Profile'; 
import Dialogs from './components/Navbar/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/Navbar/News/News';
import Music from './components/Navbar/Music/Music';
import Settings from './components/Navbar/Settings/Settings';

const App = (props) => {
  return (<BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
        <Route path='/profile' element={<Profile state={props.appState.profileApp} addPost = {props.addPost}/>} />
        <Route path='/dialogs' element={<Dialogs state={props.appState.messageApp}/>} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>);
}


export default App;
