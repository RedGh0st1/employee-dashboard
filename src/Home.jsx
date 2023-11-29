import { useEffect, useState } from "react"
import "./App.css"
import Navbar from "./Components/Navbar"
import { Link } from "react-router-dom"

//client side routing
//control which components
function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getEmployees() {
      let req = await fetch(`http://localhost:8000/employee`)
      let res = await req.json()
      console.log("response", res)
      setData(res.employees)
      console.log("this is the data: ", data)
    }
    getEmployees()
  }, [])

  return (
    <div>
      <Navbar />

      <Link to="/new">
        <button>Add New Student</button>
      </Link>

      <input type="text" placeholder="Search by name" />
      <input type="text" placeholder="Search by tag" />

      <h1>Employee Dashboard</h1>
      <div className="employee-container">
        {data.map((employee) => {
          const { pic, firstName, lastName, email, company, city, skill } =
            employee
          return (
            <div className="employee-card" key={employee.id}>
              <img src={pic} alt="employee" />
              <p>
                Name: {firstName} {lastName}
              </p>
              <p>Email: {email}</p>
              <p>Company: {company}</p>
              <p>City: {city}</p>
              <p>Skill: {skill}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
