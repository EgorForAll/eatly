// @flow 
import * as React from 'react';
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import Blog from "@/components/layout/blog/blog";
import {useEffect} from "react";

const BlogPage: React.FC = (props) => {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <>
            <Header/>
            <main className='main'>
                <Blog/>
            </main>
            <Footer/>
        </>
    )
};

export default BlogPage;