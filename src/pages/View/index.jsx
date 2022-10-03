import React from 'react'
import DealsContainer from '../../components/DealsContainer';

export default function View({cards}) {
  return (
    <div>
      <DealsContainer cards={cards} />
    </div>
  )
}
