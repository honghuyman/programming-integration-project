let data = {
    _id: "63b10c6c86f228a6d179ffb7",
    target: 9000000,
    start_date: Date(2023, 1, 1),
    end_date: Date(2023, 12, 31),
};

fetch("http://localhost:3005/update-project", {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
}).then(response => response.json())
  .then(data => console.log(data.message));