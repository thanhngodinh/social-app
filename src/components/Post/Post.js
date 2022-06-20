import React from 'react';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';
import styles from './Post.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Post = ({ data }) => {
    return (
        <div className={cx('post')}>
            <img className={cx('post-img')} src={data.img} alt="" />

            <div className={cx('post-react')}>
                <img src={data.liked ? Heart : NotLike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>

            <span className={cx('like-count')}>{data.likes} likes</span>

            <div className={cx('detail')}>
                <span>
                    <b>{data.name}</b>
                </span>
                <span> {data.desc}</span>
            </div>
        </div>
    );
};

export default Post;
