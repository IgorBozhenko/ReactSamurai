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
        <Route path='/profile' render={() => <Profile posts={props.posts}/>} />
        <Route path='/dialogs' Component={Dialogs} />
        <Route path='/news' Component={News} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>);
}


export default App;
