fetch('http://localhost:5000/all-categories')
  .then((response) => response.json())
  .then((data) => console.log(data));