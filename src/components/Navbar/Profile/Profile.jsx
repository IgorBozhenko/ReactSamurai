import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './Profileinfo/Profileinfo.jsx';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = (props) => {

  return <div className={s.content}>
    <ProfileInfo /> 
    <MyPosts state = {props.state.posts} addPost ={props.addPost}/>
  </div>;
}

export default Profile;