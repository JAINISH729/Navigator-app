import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import ViewEmployee from "./pages/ViewEmployee";
import EditEmployee from "./pages/EditEmployee";

function App() {
  const [employees, setEmployees] = useState([]);

  return (
    <Router>
      <div className="navbar">
        <h2>Employee System</h2>
        <div className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/add">Add Employee</Link>
          <Link to="/view">View Employees</Link>
        </div>
      </div>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home employees={employees} />} />
          <Route path="/add" element={<AddEmployee employees={employees} setEmployees={setEmployees} />} />
          <Route path="/view" element={<ViewEmployee employees={employees} setEmployees={setEmployees} />} />
          <Route path="/edit/:id" element={<EditEmployee employees={employees} setEmployees={setEmployees} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;