import React from 'react';
import './App.css';
import Header from './components/Header';
import {Navbar} from './components/Navbar';


const App = () => {
  return (
    <div className='app-wrapper'>

      <Header />

      <Navbar />

      <div className='content'>
        <div>
          <img src='https://avatars.mds.yandex.net/i?id=9dde1f515fdf589cc9f15d6ff368969529c63826-12503309-images-thumbs&n=13'></img>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    </div>);
}


export default App;
