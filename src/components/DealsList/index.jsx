import React from 'react';
import s from './style.module.sass';

export default function DealsList({deals}) {

    return (
        <div className={s.deals_container}>
            {
                deals.map(deal => <p key={deal.id}>{deal.title}</p>)
            }
        </div>
    )
}
