import React from 'react';
import './NavBar.css'

export const NavBar = () => {
    
    const navigateToHome = () => {
        window.location.href = '/';
    }

    const navigateToAbout = () => {
        window.location.href = '/about';
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