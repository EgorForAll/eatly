// @flow
import * as React from 'react';
import {IUser} from "@/interfaces/user";
import {IPost} from "@/interfaces/post";
import Tag from "@/components/ui/tag/tag";
import styles from "./blog-info.module.scss";
import {ReactComponent as Star} from "@/assets/images/blog-star.svg";
import UserInfo from "@/components/blocks/user-info/user-info";

type TBlogInfo = {
    user: IUser;
    post: IPost;
};

const BlogInfo: React.FC<TBlogInfo> = ({user, post}) => {
    return (
        <header className={styles.header}>
            <UserInfo user={user} width={56} height={56}/>
            <div className={styles.postInfo}>
                <div className={styles.rating}>
                    <span className={styles.number}>{post?.reactions}</span>
                    <Star/>
                </div>

                <div className={styles.tags}>
                    {post?.tags &&
                        post.tags.map((item, index) => (
                            <Tag tag={item} tags={post.tags} key={index}/>
                        ))}
                </div>
            </div>
        </header>
    );
};

export default BlogInfo;