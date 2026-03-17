import EmployeeList from "../components/EmployeeList";

function ViewEmployee({ employees, setEmployees }) {

  const deleteEmployee = (id) => {
    const updated = employees.filter(emp => emp.id !== id);
    setEmployees(updated);
  };

  return (
    <div className="card">
      <h2>Employee List</h2>

      <EmployeeList 
        employees={employees} 
        onDelete={deleteEmployee} 
      />
    </div>
  );
}

export default ViewEmployee;