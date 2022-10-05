import React from 'react';
import Close from '../UI/Close';
import s from './style.module.sass'

export default function DealCard({ title, ordinal_number }) {

    return (
        <div className={s.card}>
            <p>{ordinal_number}.</p>
            <p>{title}</p>
            <Close/>
        </div>
    )
}
