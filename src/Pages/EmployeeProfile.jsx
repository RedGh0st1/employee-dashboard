import { useParams } from "react-router-dom"
import Navbar from "../Components/Navbar"
import { useEffect, useState } from "react"

export default function EmployeeProfile() {
  const { id } = useParams()
  const [employee, setEmployee] = useState()
  useEffect(() => {
    async function getEmployeeById() {
      let req = await fetch(`http://localhost:8000/employee/${id}`)
      let res = await req.json()
      if (req.ok) setEmployee(res)
      console.log(employee)
    }
    getEmployeeById()
  }, [])

  return (
    <div>
      <Navbar />
      <h1>Employee Profile {id} </h1>
    </div>
  )
}
