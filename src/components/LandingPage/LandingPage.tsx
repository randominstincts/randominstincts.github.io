import React from 'react';
import './LandingPage.css';
import { posts } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';

export const LandingPage = () => {
    const navigate = useNavigate();
    const renderPosts = () => {
        return (
            <>
            {posts.map((post) => {
                return (
                    <div className='post-card' onClick={() => openPost(post)}>
                        <div className='post-title'>
                            {post.title}
                        </div>
                        <div className='post-description'>{post.description}</div>
                        <div className='date'>Published on: {post?.date}</div>
                    </div>
                );
            })}
            </>
        );
    };

   const openPost = (post: any) => {
        navigate(`post/${post.id}`);
   }
    return (
        <div>    
            <NavBar/>    
            <div className='container'>
                {renderPosts()}
            </div>
        </div>
    );
} 