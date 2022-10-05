import React from 'react';
import s from './style.module.sass';
import EmptyList from '../EmptyList';

export default function DealsList({deals}) {

    return (
        <div className={s.deals_container}>
            {
                deals.length === 0
            ? <EmptyList/>
            : deals.map(deal => <p key={deal.id}>{deal.title}</p>)
            }
        </div>
    )
}
