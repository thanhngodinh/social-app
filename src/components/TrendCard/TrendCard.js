import React from 'react';
import { TrendData } from '../../Data/TrendData.js';
import styles from './TrendCard.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TrendCard = () => {
    return (
        <div className={cx("trend-card")}>
            <h3>Trends for you</h3>
            {TrendData.map((trend) => {
                return (
                    <div className={cx("trend")}>
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k shares</span>
                    </div>
                );
            })}
        </div>
    );
};

export default TrendCard;
