import React from 'react';
import styles from './Auth.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Auth = () => {
    return (
        <div className={cx('auth')}>
            Auth
        </div>
    );
}

export default Auth;
