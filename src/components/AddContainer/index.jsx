import React from 'react';
import AddDeals from '../AddDeals';
import DealsList from '../DealsList';
import s from './style.module.sass';


export default function AddContainer({deals}) {
    return (
        <div className={['container'].join(' ')}>
            <div className={s.add_container}>
                <AddDeals />
                <DealsList deals={deals}/>
            </div>
        </div>
    )
}
