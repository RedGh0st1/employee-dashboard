import { useEffect, useState } from "react"
import "./App.css"
import Navbar from "./Components/Navbar"
import { Link } from "react-router-dom"

//client side routing
//control which components
function Home() {
  const [data, setData] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [tags, setTags] = useState("")
  useEffect(() => {
    async function getEmployees() {
      let request = await fetch(`http://localhost:8000/employee`)
      let response = await request.json()
      console.log("response", response)
      setData(response.employees)
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

      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => {
          setSearchQuery(e.target.value)
        }}
      />
      <input
        type="text"
        placeholder="Search by tag"
        onChange={(e) => {
          setTags(e.target.value)
        }}
      />

      <h1>Employee Dashboard</h1>
      <div className="employee-container">
        {data.map((employee) => {
          const { pic, firstName, lastName, email, company, city, skill, id } =
            employee
          const fullName = `${firstName} ${lastName}`
          if (
            searchQuery &&
            !fullName.toLowerCase().includes(searchQuery.toLowerCase())
          )
            return null

          return (
            <div className="employee-card" key={id}>
              <Link to={`/employees/${employee.id}`}>
                <img src={pic} height={100} width={100} alt="employee" />
                <h4>
                  Name: {firstName} {lastName}
                </h4>
              </Link>

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
