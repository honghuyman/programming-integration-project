let data = {
    user_ID: "63b039df07258122b58d3b2a",
    amount: 3000,
    category_ID: "63b15036c6a22b90406a2097",
    note: "hello world 71",
    date: Date(1,1,2023)
};

fetch("http://localhost:3005/add-transaction", {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
}).then(response => response.json())
  .then(data => console.log(data));