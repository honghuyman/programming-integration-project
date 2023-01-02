fetch('http://localhost:3005/all-projects/example')
  .then((response) => response.json())
  .then((data) => console.log(data));