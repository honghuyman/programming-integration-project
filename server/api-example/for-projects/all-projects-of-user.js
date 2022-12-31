fetch('http://localhost:5000/all-projects/example')
  .then((response) => response.json())
  .then((data) => console.log(data));