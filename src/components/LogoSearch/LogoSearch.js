import React from 'react';
import styles from './LogoSearch.module.scss';
import classNames from 'classnames/bind';
import Logo from '../../img/logo.png';
import { UilSearch } from '@iconscout/react-unicons';

const cx = classNames.bind(styles);

const LogoSearch = () => {
    return (
        <div className={cx("logo-search")}>
            <img src={Logo} alt="" />
            <div className={cx("search")}>
                <input type="text" placeholder="#Explore" />
                <div className={cx("s-icon")}>
                    <UilSearch />
                </div>
            </div>
        </div>
    );
};

export default LogoSearch;
