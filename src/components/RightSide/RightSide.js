import React, { useState } from 'react';
import Home from '../../img/home.png';
import Noti from '../../img/noti.png';
import Comment from '../../img/comment.png';
import { UilSetting } from '@iconscout/react-unicons';
import TrendCard from '../TrendCard';
import ShareModal from '../ShareModal';
import styles from './RightSide.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RightSide = () => {
    const [modalOpened, setModalOpened] = useState(false);
    return (
        <div className={cx('right-side')}>
            <div className={cx('nav-icons')}>
                <img src={Home} alt="" />
                <UilSetting />
                <img src={Noti} alt="" />
                <img src={Comment} alt="" />
            </div>

            <TrendCard />

            <button
                className={cx('button', 'r-button')}
                onClick={() => setModalOpened(true)}
            >
                Share
            </button>
            <ShareModal
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
            />
        </div>
    );
};

export default RightSide;
