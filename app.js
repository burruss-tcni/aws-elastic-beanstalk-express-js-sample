const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Today is a day the Lord has made. Let us rejoice and be glad in it!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
