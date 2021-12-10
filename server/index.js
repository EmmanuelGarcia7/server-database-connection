const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = 3000;

const controllers = require('./controllers');

// this allows to recieve json
app.use(express.json());

app.get('/demo', controllers.get)

app.post('/demo', controllers.post)

app.listen(PORT, () => {
  console.log('This server is running on port 3000');
});