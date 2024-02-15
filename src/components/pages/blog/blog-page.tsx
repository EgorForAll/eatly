// @flow 
import * as React from 'react';
import {useEffect} from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/footer";

const BlogPage: React.FC = (props) => {

    // useEffect(() => {
    //     fetch('https://dummyjson.com/posts?select=title,reactions,tags,body')
    //         .then(res => res.json())
    //         .then(console.log);
    // }, []);

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