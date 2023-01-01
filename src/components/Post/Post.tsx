import * as React from "react";
import { useEffect, useState } from 'react';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { posts } from "../../utils/constants";
import { NavBar } from "../NavBar/NavBar";
import './Post.css';

interface State {
    postContent?: string;
    postMetadata?: any;
    isLoaded?: boolean;
    postId?: string;
}


export const Post = (props: any) => {
    const [state, setState] = useState<State>({});

    const url: string = window.location.href;
    const id: string | undefined = url.split("/").pop();

    useEffect(() => {
        if(id && id !== postId) {
            setState((state) => ({
                ...state,
                postId: id,
                isLoaded: true
            }));
        }
    });

    const { postContent, postId, postMetadata, isLoaded } = state;

    useEffect(() => {
        if(postId) {
            loadPostMetadata();
            loadPostContent();
        }
    },[postId]);

    const loadPostMetadata = async () => {
        console.log("postId:" + postId)
        const postMetadata = posts.find((post) => post?.id === (postId || ''));
        console.log(postMetadata);
        if(postMetadata) {
            setState((state) => ({
                ...state,
                postMetadata
            }));
        }
    };

    const loadPostContent = async () => {
        if(postId) {
        import(`../../blog-posts/${postId}.md`)
            .then(res => {
                fetch(res.default)
                .then(res => res.text())
                .then(res =>  (  
                    setState((state) => ({
                    ...state,
                    postContent: res,
                })))
                )
            });
        }
    };


    return (
        <div>
            <NavBar/>
            <div className='post-container'>
            <span className='post-heading'>{postMetadata?.title}</span>
            <span className='post-metadata'><i>Written by Kartik on {postMetadata?.date}</i></span>
            <div className='post-content'>
                <ReactMarkdown children={postContent || ''}></ReactMarkdown>
            </div>
            </div>
        </div>
    );
} 