let data = {
    transaction_ID: '63b14ec27accfe2283287de9',
    amount: 100,
    category_ID: "63b15036c6a22b90406a2097",
    note: "hello universe",
    date: Date(1,1,2023)
};

fetch("http://localhost:5000/update-transaction", {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
}).then(response => response.json())
  .then(data => console.log(data));