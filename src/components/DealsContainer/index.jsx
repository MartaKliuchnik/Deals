import React from 'react';
import DealCard from '../DealCard';
import EmptyList from '../EmptyList';
import s from './style.module.sass';

export default function DealsContainer({ deals }) {
    

    return (
        <div className={'container'}>

            {
                deals.length === 0
                ? <div className={s.empty_list}><EmptyList/></div>
                : deals.map(deal => <DealCard key={deal.id} {...deal} />)
            }
            
        </div>
    )
}
