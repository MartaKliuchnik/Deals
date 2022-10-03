import React from 'react'
import DealCard from '../DealCard'

export default function DealsContainer({cards}) {
    return (
        <div className={'container'}>
            {cards.map(card => <DealCard key={card.id} {...card} />)}
        </div>
    )
}
