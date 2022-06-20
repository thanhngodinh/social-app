import React, { useState, useRef } from 'react';
import ProfileImage from '../../img/profileImg.jpg';
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import styles from './PostShare.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };
    return (
        <div className={cx('post-share')}>
            <img className={cx('post-share-img')} src={ProfileImage} alt="" />
            <div className={cx('wrapper')}>
                <input type="text" placeholder="What's happening" />
                <div className={cx('post-options')}>
                    <div
                        className={cx('option')}
                        style={{ color: 'var(--photo)' }}
                        onClick={() => imageRef.current.click()}
                    >
                        <UilScenery />
                        Photo
                    </div>
                    <div
                        className={cx('option')}
                        style={{ color: 'var(--video)' }}
                    >
                        <UilPlayCircle />
                        Video
                    </div>{' '}
                    <div
                        className={cx('option')}
                        style={{ color: 'var(--location)' }}
                    >
                        <UilLocationPoint />
                        Location
                    </div>{' '}
                    <div
                        className={cx('option')}
                        style={{ color: 'var(--shedule)' }}
                    >
                        <UilSchedule />
                        Shedule
                    </div>
                    <button className={cx('button', 'ps-button')}>Share</button>
                    <div style={{ display: 'none' }}>
                        <input
                            type="file"
                            name="myImage"
                            ref={imageRef}
                            onChange={onImageChange}
                        />
                    </div>
                </div>
                {image && (
                    <div className={cx('previewImage')}>
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={image.image} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostShare;
