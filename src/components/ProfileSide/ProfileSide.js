import React from 'react';
import styles from './ProfileSide.module.scss';
import classNames from 'classnames/bind';
import FollowersCard from '../FollowersCard';
import LogoSearch from '../LogoSearch';
import ProfileCard from '../ProfileCard';

const cx = classNames.bind(styles);

const ProfileSide = () => {
    return (
        <div className={cx("profile-side")}>
            <LogoSearch />
            <ProfileCard />
            <FollowersCard />
        </div>
    );
};

export default ProfileSide;