fetch('http://localhost:3005/balance/63b039df07258122b58d3b2a')
  .then((response) => response.json())
  .then((data) => console.log(data));