const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at port: ${PORT}`);
});
