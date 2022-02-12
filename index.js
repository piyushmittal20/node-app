const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello From me!!");
});

app.listen(3000, () => {
  console.log("Server is running...");
});
