import React from 'react';
import { addPost } from './state';
import App from '../App';
import ReactDOM from 'react-dom/client';
import './../index.css';


export let reRenderEntireTree = (state) => {

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <App appState={state} addPost = {addPost}/>
    </React.StrictMode>
    );
}