let data = {
    user_ID: "63b074a9e3f49e88a5c1f207",
    project_ID: "63b057de3c3778e151e8108f",
};

fetch("http://localhost:3005/delete-member", {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
}).then(response => response.json())
  .then(data => console.log(data));