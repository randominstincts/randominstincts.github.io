import './App.css';
import React from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router/Router';
import { NavBar } from './components/NavBar/NavBar';

export const App = () => {
  return (
    <div className='main-container'>
      <NavBar/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
