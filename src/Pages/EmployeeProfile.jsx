import { useParams } from "react-router-dom"

export default function EmployeeProfile() {
  const { id } = useParams()
  return (
    <div>
      <h1>Employee Profile {id} </h1>
    </div>
  )
}
