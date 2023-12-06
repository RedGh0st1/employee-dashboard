import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to={"/employee"}> Employee</Link>
        </li>

        <li>
          <Link to="/employee/:id"> Employee Profile </Link>
        </li>

        <li>
          <Link to="/new"> New Employee </Link>
        </li>

        <li>
          <Link to="/about"> About </Link>
        </li>

        <li>
          <Link to="/contact"> Contact </Link>
        </li>
      </ul>
    </div>
  )
}
