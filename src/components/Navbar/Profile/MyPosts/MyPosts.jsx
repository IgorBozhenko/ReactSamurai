import React from 'react';
import s from './MyPosts.module.css'
import Post from './Posts/Post';
import { useRef } from 'react';



const MyPosts = (props) => {

  let postes = props.state.map(el => <Post message={el.message} likescount={el.likescount} id={el.id} />);
  const newPost = useRef(null);
  let addPost = () => {
    let text = newPost.current;
    props.addPost(text);
    newPost.current = '';
  }
  return <div>
    My posts
    <div>
      <input ref={newPost}/>
      <button onClick={addPost}>add post</button>
    </div>
    {postes}
    

  </div>
}

export default MyPosts;