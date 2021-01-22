import React from 'react'
import { useParams } from 'react-router-dom';

function Show(props) {
  const params = useParams()
  const errand = props.errands.find((errand) => {
    return errand.id === params.id
  })
  console.log(errand)
  return (
    <div>
      <h1>{errand.fields.organization}</h1>
    </div>
  )
}

export default Show
