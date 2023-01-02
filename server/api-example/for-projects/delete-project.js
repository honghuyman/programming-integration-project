let data = {
    project_ID: "63b10d7764e519fdeb4d37ed",
};

fetch("http://localhost:3005/delete-project", {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
}).then(response => response.json())
  .then(data => console.log(data));