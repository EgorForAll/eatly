// @flow
import * as React from 'react';
import {useEffect} from "react";
import styles from "./blog.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "@/features/posts";
import axios from "axios";
import {RootState} from "@/assets/store";
import Article from "@/components/blocks/article/article";
import PaginationArrow from "@/components/ui/padination-arrow/pagination-arrow";

const URL = 'https://dummyjson.com/posts?select=title,reactions,tags,body';
const Blog: React.FC = (props) => {
    const posts = useSelector((state: RootState) => state.posts.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(URL).then(({data}) => dispatch(fetchPosts(data)));
    }, []);

    return (
        <section className={styles.blog}>
            <h1 className={styles.mainTitle}><span className={styles.colored}>Latest</span> Articles </h1>
            <div className={styles.container}>
                <ul className={styles.list}>
                    {posts && posts.map((item, index) => <Article post={item} key={index} />)}
                </ul>
                <div className={styles.pagination}>
                    <PaginationArrow isLeft={true} color={'#CECECE'} isDisabled={true}/>
                    <PaginationArrow isLeft={false} color={'#605E5E'}  isDisabled={false}/>
                </div>
            </div>
        </section>
    );
};

export default Blog;