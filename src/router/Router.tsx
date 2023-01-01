import React from 'react';
import { createHashRouter } from "react-router-dom";
import { About } from "../components/About/About";
import { LandingPage } from "../components/LandingPage/LandingPage";
import { Post } from "../components/Post/Post";


export const router = createHashRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <LandingPage />,
    },
    {
      path: "post/:id",
      element: <Post/>,
      errorElement: <LandingPage />,
    },
    {
      path: "about",
      element: <About/>,
      errorElement: <LandingPage />,
    },
    {
      path: "*",
      element: <LandingPage/>,
      errorElement: <LandingPage />,
    }
  ]);