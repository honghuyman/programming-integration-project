fetch('http://localhost:3005/project/63b10c6c86f228a6d179ffb7')
  .then((response) => response.json())
  .then((data) => console.log(data));