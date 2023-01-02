fetch('http://localhost:3005/find-users/exa')
  .then((response) => response.json())
  .then((data) => console.log(data));