import { useParams } from "react-router-dom"
import Navbar from "../Components/Navbar"

export default function EmployeeProfile() {
  const { id } = useParams()
  return (
    <div>
      <Navbar />
      <h1>Employee Profile {id} </h1>
    </div>
  )
}
