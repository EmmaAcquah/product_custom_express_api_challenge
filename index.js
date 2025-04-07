const express = require('express');
const app = express();
const port = 8086;

app.listen(port, () => console.log(`Product API listening on port ${port}!`));