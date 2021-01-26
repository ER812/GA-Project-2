import React from 'react'
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <main>
      {props.errands && props.errands.map((table) => (
        <Link key={table.id} to={`/table/${table.id}`}>{table.fields.organization}</Link>
      ))}
        </main>
    </div>
    
  )
}

export default Home
