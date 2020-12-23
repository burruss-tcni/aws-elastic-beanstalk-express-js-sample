const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Proverbs 2:3: Yeah, if the criest after knowledge, and liftest up thy voice for understanding;'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
