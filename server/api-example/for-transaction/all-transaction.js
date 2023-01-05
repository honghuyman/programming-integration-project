fetch('http://localhost:3005/all-transactions/63b039df07258122b58d3b2a')
  .then((response) => response.json())
  .then((data) => console.log(data));