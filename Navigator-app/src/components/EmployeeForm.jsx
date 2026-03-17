import { useState } from "react";

function EmployeeForm({ onSubmit, initialData = {} }) {
  const [form, setForm] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    role: initialData.role || "",
    status: initialData.status || "Active"
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.role) {
      setError("All fields are required!");
      return;
    }

    setError("");
    onSubmit(form);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}

      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <input name="role" value={form.role} onChange={handleChange} placeholder="Role" />

      <select name="status" value={form.status} onChange={handleChange}>
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <button  type="submit">Save</button>
    </form>
  );
}

export default EmployeeForm;