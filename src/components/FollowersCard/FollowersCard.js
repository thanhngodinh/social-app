import React from 'react';
import styles from './FollowersCard.module.scss';
import classNames from 'classnames/bind';
import { Followers } from '../../Data/FollowersData';

const cx = classNames.bind(styles);

const FollowersCard = () => {
    return (
        <div className={cx("followers-card")}>
            <h3>Who is following you</h3>

            {Followers.map((follower, id) => {
                return (
                    <div className={cx('follower')}>
                        <div className={cx('follower-wrapper')}>
                            <img
                                src={follower.img}
                                alt=""
                                className={cx('follower-image')}
                            />
                            <div className={cx('name')}>
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>
                            </div>
                        </div>
                        <button className={cx('button', 'fc-button')}>
                            Follow
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default FollowersCard;

