import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import s from './style.module.sass'

export default function Close() {
    return (
        <button className={s.close_btn}>
            <CloseOutlined />
        </button>
    )
}
