let data = { username: "example", password: "example" };

fetch("http://localhost:3005/register", {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
}).then(response => response.json())
  .then(data => console.log(data.message));