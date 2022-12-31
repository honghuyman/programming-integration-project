let data = {
    project_name: "example project 3",
    target: 30000,
    start_date: Date(2022, 12, 31),
    end_date: Date(2023, 12, 31),
    manager_id: "63b039df07258122b58d3b2a"
};

fetch("http://localhost:5000/new-project", {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
}).then(response => response.json())
  .then(data => console.log(data.message));