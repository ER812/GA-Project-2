import React from 'react'
import { useParams } from 'react-router-dom';

function Show(props) {
  const params = useParams()
  const errand = props.errands.find((errand) => {
    return errand.id === params.id
  })


  return (
    <div className="showText">
      <h1>Location:{errand.fields.organization}</h1>
      <h2>Errand:{errand.fields.errand}</h2>
      <h2>Notes:{errand.fields.notes}</h2>
      <h2>Payments Accepted:{errand.fields.paymentsAccepted}</h2>
      {/* <h2>{errand.fields.openingHours}</h2> */}
      {/* <h2>{errand.fields.closingHours}</h2> */}
      
    </div>
  )
}

export default Show
