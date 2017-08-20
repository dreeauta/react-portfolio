const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();

const app = express();
app.use(bodyParser.json());





app.listen(4001, () => console.log('Listening on port 4001.'));
