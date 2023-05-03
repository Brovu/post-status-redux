const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json(), cors());

app.post("/v/update", (req, res) => {
  setTimeout(() => {
    res.status(200).json(req.body);
  }, [2000]);
});

app.listen(8000, () => {
  console.log("Server is running");
});
