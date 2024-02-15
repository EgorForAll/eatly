// @flow 
import * as React from 'react';
import {useEffect} from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/footer";
import {useDispatch} from "react-redux";
import {fetchPosts} from "@/features/posts";

const BlogPage: React.FC = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://dummyjson.com/posts?select=title,reactions,tags,body')
            .then(res => res.json())
            .then(({posts}) => dispatch(fetchPosts(posts)));
    }, []);

    return (
        <>
            <Header/>
            <div className='main'>
                This is the Blog page!
            </div>
            <Footer/>
        </>
    )
};

export default BlogPage;