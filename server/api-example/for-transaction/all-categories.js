fetch('http://localhost:3005/all-categories')
  .then((response) => response.json())
  .then((data) => console.log(data));