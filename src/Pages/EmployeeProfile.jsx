import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import UpdateEmployeeForm from "../Components/UpdateEmployeeForm";

export default function EmployeeProfile() {
  const { id } = useParams();
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    async function getEmployeeById() {
      let request = await fetch(`http://localhost:8000/employee/${id}`);
      let response = await request.json();
      console.log(response);
      if (request.ok) setEmployee(response);
    }
    getEmployeeById();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Employee Profile {id} </h1>
      <img src={employee.pic} alt="employee pic" />
      <h1>
        {employee.first_name} {employee.last_name}
      </h1>
      <UpdateEmployeeForm />
    </div>
  );
}
