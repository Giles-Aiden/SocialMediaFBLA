const path = require('path');
const express = require('express');
const helmet = require('helmet');
const history = require('connect-history-api-fallback');
const app = express();

app.use(helmet());
app.use(history());

app.use(express.static('dist'));

app.listen(3000);

console.log('Frontend Applications Started');
