import {
    createBrowserRouter,
  } from "react-router-dom";
import React from 'react';
import { LandingPage } from "../components/LandingPage/LandingPage";
import { Post } from "../components/Post/Post";
import { About } from "../components/About/About";


export const router = createBrowserRouter([
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
    }
  ]);