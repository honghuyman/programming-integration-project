let data = { username: "example", password: "example" };

fetch("http://localhost:5000/login", {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
}).then(response => response.json())
  .then(data => console.log(data.message, '\n', data.user));