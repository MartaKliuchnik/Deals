import React from 'react'
import DealCard from '../DealCard'

export default function DealsContainer({deals}) {
    return (
        <div className={'container'}>
            {deals.map(deal => <DealCard key={deal.id} {...deal} />)}
        </div>
    )
}
