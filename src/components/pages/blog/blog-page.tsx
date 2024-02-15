// @flow 
import * as React from 'react';
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/footer";
import Blog from "@/components/layout/blog/blog";

const BlogPage: React.FC = (props) => {
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