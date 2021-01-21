import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">New Page</Link>
   </nav>

  )
}

export default Nav;