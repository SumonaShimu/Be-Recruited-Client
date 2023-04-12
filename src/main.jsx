import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Layout from './component/Layout/Layout';
import Body from './component/Layout/Body';
import Blog from './component/Blog/Blog';
import Statistics from './component/Statistics/Statistics';
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import Error from './component/Error';
import Details from './component/FeatureJob/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [{
      path: "/",
      element: <Body></Body>,
    },
    {
      path: "blog",
      element: <Blog></Blog>
    },
    {
      path: "statistics",
      element: <Statistics></Statistics>
    },
    {
      path: "appliedjobs",
      element: <AppliedJobs></AppliedJobs>
    },
    {
      path: "/details",
      element: <Details></Details>,
    },
    {
      path: "details/:id",
      element: <Details></Details>,
      loader:({params})=> fetch('/jobs.json')
    },
    {
      path:"*",
      element: <Error></Error>
    }
  ]
  },
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);