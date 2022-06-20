import React from 'react';
import { PostsData } from '../../Data/PostsData';
import Post from '../Post';
import styles from './Posts.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Posts = () => {
    return (
        <div className={cx('posts')}>
            {PostsData.map((post, id) => {
                return <Post data={post} id={id} />;
            })}
        </div>
    );
};

export default Posts;
