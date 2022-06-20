import React from 'react';
import styles from './PostSide.module.scss';
import classNames from 'classnames/bind';
import Posts from '../Posts/Posts';
import PostShare from '../PostShare/PostShare';

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