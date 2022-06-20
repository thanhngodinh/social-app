import React from 'react';
import styles from './ProfileCard.module.scss';
import classNames from 'classnames/bind';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';

const cx = classNames.bind(styles);

const ProfileCard = () => {
    const ProfilePage = true;
    return (
        <div className={cx("profile-card")}>
            <div className={cx("profile-images")}>
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </div>

            <div className={cx("profile-name")}>
                <span>Zendaya MJ</span>
                <span>Senior UI/UX Designer</span>
            </div>

            <div className={cx("follow-status")}>
                <hr />
                <div>
                    <div className={cx("follow")}>
                        <span>6,890</span>
                        <span>Followings</span>
                    </div>
                    <div className={cx("vl")}></div>
                    <div className={cx("follow")}>
                        <span>1</span>
                        <span>Followers</span>
                    </div>

                    {ProfilePage && (
                        <>
                            <div className={cx("vl")}></div>
                            <div className={cx("follow")}>
                                <span>3</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}
                </div>
                <hr />
            </div>
            {ProfilePage ? '' : <span>My Profile</span>}
        </div>
    );
};

export default ProfileCard;

