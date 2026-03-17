import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EmployeeForm from "../components/EmployeeForm";

function EditEmployee({ employees, setEmployees }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const emp = employees.find(e => e.id === Number(id));
    if (emp) setCurrent(emp);
  }, [id, employees]);

  const updateEmployee = (data) => {
    const updated = employees.map(emp =>
      emp.id === Number(id) ? { ...emp, ...data } : emp
    );

    setEmployees(updated);
    navigate("/view");
  };

  return (
    <div className="card">
      <h2>Edit Employee</h2>
      {current && (
        <EmployeeForm initialData={current} onSubmit={updateEmployee} />
      )}
    </div>
  );
}

export default EditEmployee;