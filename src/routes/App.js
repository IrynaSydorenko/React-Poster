// import { useState } from 'react';
import PostList from '../components/Postlist/PostList';
import { Outlet } from 'react-router-dom';

function App() {
  // const [modalIsVisible, setModalIsVisible] = useState(false);

  // const showModalHandler = () => {
  //   setModalIsVisible(true);
  // };

  // function hideModalHandler() {
  //   setModalIsVisible(false);
  // }

  return (
    <>
      <Outlet />
      <main>
        <PostList /*onStopPosting={hideModalHandler} isPosting={modalIsVisible} */
        />
      </main>
    </>
  );
}

export default App;

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}
