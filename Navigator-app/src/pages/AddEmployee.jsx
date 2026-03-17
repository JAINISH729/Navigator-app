import EmployeeForm from "../components/EmployeeForm";
import { useNavigate } from "react-router-dom";

function AddEmployee({ employees, setEmployees }) {
  const navigate = useNavigate();

  const addEmployee = (data) => {
    const newEmp = { id: Date.now(), ...data };
    setEmployees([...employees, newEmp]);
    navigate("/view");
  };

  return (
    <div className="card">
      <h2>Add Employee</h2>
      <EmployeeForm onSubmit={addEmployee} />
    </div>
  );
}

export default AddEmployee;