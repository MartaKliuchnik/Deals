import React from 'react';
import s from './style.module.sass'

export default function EmptyList() {
    return (
        <div className={s.empty_list}>
            <p>Список дел пуст</p>
        </div>
    )
}
