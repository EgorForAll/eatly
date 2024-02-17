// @flow
import * as React from 'react';
import {IUser} from "@/interfaces/user";
import {IPost} from "@/interfaces/post";
import Tag from "@/components/ui/tag/tag";
import styles from "./blog-info.module.scss";
import {ReactComponent as Star} from "@/assets/images/blog-star.svg";

type TBlogInfo = {
    user: IUser;
    post: IPost;
};

const BlogInfo: React.FC<TBlogInfo> = ({user, post}) => {
    return (
        <header className={styles.header}>
            <div className={styles.userInfo}>
                <div className={styles.avatar}>
                    <img
                        src={user?.image}
                        alt={`avatar of ${user?.firstName}`}
                        width={56}
                        height={56}
                    />
                </div>
                <div className={styles.userNameWrapper}>
                    <span className={styles.written}>Written by</span>
                    <span className={styles.name}>
                    {user?.firstName} {user?.lastName}
                  </span>
                </div>
            </div>
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