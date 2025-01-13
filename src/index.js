import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { loader as postsLoader } from './routes/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewPost from './routes/NewPost/NewPost';
import RootLayout from './routes/RootLayout';
import PostDetails, {
  loader as postDetailsLoader,
} from './routes/PostDetails/PostDetails';
import { action as newPostAction } from './routes/NewPost/NewPost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <App />,
        loader: postsLoader,
        children: [
          {
            path: '/create-post',
            element: <NewPost />,
            action: newPostAction,
          },
          {
            path: '/:id',
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
