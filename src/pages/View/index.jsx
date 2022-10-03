import React from 'react'
import DealsContainer from '../../components/DealsContainer';

export default function View({deals}) {
  return (
    <div>
      <DealsContainer deals={deals} />
    </div>
  )
}
