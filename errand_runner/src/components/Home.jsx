import React from 'react'
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      {props.errands && props.errands.map((table) => (
        <Link key={table.id} to={`/table/${table.id}`}>{table.fields.organization}</Link>
      ))}
    </div>
  )
}

export default Home
