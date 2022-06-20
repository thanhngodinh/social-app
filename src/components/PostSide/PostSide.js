import React from 'react';
import Posts from '../Posts/Posts';
import PostShare from '../PostShare/PostShare';
import styles from './PostSide.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PostSide = () => {
    return (
        <div className="PostSide">
            <PostShare />
            <Posts />
        </div>
    );
};

export default PostSide;