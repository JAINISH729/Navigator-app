import { Link } from "react-router-dom";

function EmployeeList({ employees, onDelete }) {
  if (employees.length === 0) {
    return <p>No employees found</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {employees.map(emp => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.role}</td>

            {/* ✅ STATUS BADGE */}
            <td>
              <span className={`status ${emp.status.toLowerCase()}`}>
                {emp.status}
              </span>
            </td>

            {/* ✅ BUTTONS WITH GAP */}
            <td>
              <div className="action-buttons">
                <Link to={`/edit/${emp.id}`} className="edit-btn">
                  Edit
                </Link>

                <button
                  onClick={() => onDelete(emp.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;