import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = (props) => {

  let postes = props.posts.map(el => <Post message={el.message} likescount={el.likescount} id={el.id} />);

  return <div>
    My posts
    <div>
      <textarea></textarea>
      <button>add post</button>
    </div>
    {postes}
    

  </div>
}

export default MyPosts;