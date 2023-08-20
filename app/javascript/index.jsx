import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  } ,
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);