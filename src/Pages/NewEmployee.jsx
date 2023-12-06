import Navbar from "../Components/Navbar";
import NewEmployeeForm from "../Components/NewEmployeeForm";

export default function NewEmployee() {
  return (
    <div>
      <Navbar />
      <h1> New Employee </h1>
      <NewEmployeeForm />
    </div>
  );
}
