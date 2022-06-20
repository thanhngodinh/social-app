import React from 'react';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Profile = () => {
    return (
        <div className={cx('profile')}>
            Profile
        </div>
    );
}

export default Profile;
