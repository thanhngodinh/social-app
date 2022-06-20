import React from 'react';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import ProfileSide from '../../components/ProfileSide';
import PostSide from '../../components/PostSide';
import RightSide from '../../components/RightSide';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('home')}>
            <ProfileSide />
            <PostSide />
            <RightSide />
        </div>
    );
};

export default Home;
