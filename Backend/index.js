const express = require("express");
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors()); 

app.get("/", async (req, res) => {
  const response = await axios("https://jsonplaceholder.typicode.com/todos");
  res.send(response.data);
});

app.listen(3000, () => console.log("Server is running..."));
