const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Team!'));

var name = window.prompt("Enter your name: ");
alert("Your name is " + name);

app.listen(port);
console.log(`App running on http://localhost:${port}`);
