/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');

const app = express();
const defaultPort = 8081;

app.use(express.static('build'));

app.get('/', (req, res) => {
  res.send(`Hello world! Realtime is ${new Date().toString()}`);
});

app.listen(defaultPort, () => {
  console.log(`Example app listening at http://localhost:${defaultPort}`);
});
