const express = require('express');

const app = express();

app.use(express.static('public')); // serves HTML, JS, CSS files

app.listen(3000);