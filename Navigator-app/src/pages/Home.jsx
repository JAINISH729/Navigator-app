function Home({ employees }) {
  const recent = employees[employees.length - 1];

  return (
    <div className="card">
      <h1>Dashboard</h1>
      <p>Total Employees: {employees.length}</p>
      <p>Active: {employees.filter(e => e.status === "Active").length}</p>
      <p>Inactive: {employees.filter(e => e.status === "Inactive").length}</p>
    </div>
  );
}

export default Home;