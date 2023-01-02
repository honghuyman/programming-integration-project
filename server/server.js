const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());
// get driver connection
const dbo = require("./db/conn");

// api
app.use(require("./routes/user"));
app.use(require("./routes/category"));
app.use(require("./routes/project"));
app.use(require("./routes/transaction"));

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer();
  console.log(`Server is running on port: ${port}`);
});