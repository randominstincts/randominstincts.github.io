import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css'

export const NavBar = () => {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/");
    }

    const navigateToAbout = () => {
        navigate("/about");
    }
    return (
        <>        
        <div className='navbar-div'>
            <span className='navbar-cta' onClick={() => navigateToHome()}>Posts</span>
            <span className='random-instincts-text'>Random Instincts</span>
            <span className='navbar-cta' onClick={() => navigateToAbout()}>About</span>
        </div>
        </>
    );
} 