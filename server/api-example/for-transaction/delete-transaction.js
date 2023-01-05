let data = {
    transaction_ID: '63b16836e859aeb833fe5e49',
};

fetch("http://localhost:3005/delete-transaction/", {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
}).then(response => response.json())
  .then(data => console.log(data));