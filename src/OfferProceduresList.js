import React from 'react';
import OfferProcedure from './OfferProcedure';

const OfferProceduresList = (props) => {

  let procedures = props.offerProcedures.map(procedure => {
    return (
        <OfferProcedure procedure={procedure}/>
    )
  })
  return (
    <div>
      { procedures }
    </div>
  )
}

export default OfferProceduresList;
