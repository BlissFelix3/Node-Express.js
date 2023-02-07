const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});