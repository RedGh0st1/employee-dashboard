import "./App.css"
import Navbar from "./Components/Navbar"
import { Link } from "react-router-dom"

//client side routing
//control which components
function Home() {
  return (
    <div>
      <Navbar />

      <Link to="/new">
        <button>Add New Student</button>
      </Link>

      <input type="text" placeholder="Search by name" />
      <input type="text" placeholder="Search by tag" />

      <h1>Employee Dashboard</h1>
    </div>
  )
}

export default Home
