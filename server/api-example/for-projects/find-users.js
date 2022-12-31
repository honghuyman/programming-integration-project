fetch('http://localhost:5000/find-users/exa')
  .then((response) => response.json())
  .then((data) => console.log(data));