import React from 'react';
import Post from '../Post/Post';
import { useLoaderData } from 'react-router-dom';
import styles from './PostList.module.css';

function PostList() {
  const posts = useLoaderData();

  // function addPostHandler(postData) {
  //   fetch('http://localhost:8080/posts', {
  //     method: 'POST',
  //     body: JSON.stringify(postData),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   setPosts((existingState) => [postData, ...existingState]);
  // }

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <Post
              author={post.author}
              body={post.body}
              key={post.id}
              id={post.id}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div className={{ textAlign: 'center', colour: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
