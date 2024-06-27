import React from 'react';
import s from './Profileinfo.module.css';

const ProfileInfo = (props) => {
    return <div>
        <img src='https://avatars.mds.yandex.net/i?id=9dde1f515fdf589cc9f15d6ff368969529c63826-12503309-images-thumbs&n=13'></img>

        <div className={s.profileItem}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;