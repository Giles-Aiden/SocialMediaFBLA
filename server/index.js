const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("<h1>CaC Server</h1>");
});

app.listen(3000);
