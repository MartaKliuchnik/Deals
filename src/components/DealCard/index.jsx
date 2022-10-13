import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context';
import Close from '../UI/Close';
import s from './style.module.sass'

export default function DealCard({ id, title, index }) {

    const { delete_deals } = useContext(Context);

    return (
        <div className={s.card}>
            <p>{++index}.</p>
            <p>{title}</p>
            <Close onClick={() => delete_deals(id)} />
        </div>
    )
}
