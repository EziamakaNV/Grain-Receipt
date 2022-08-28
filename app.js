const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const collateralAPI = require('./modules/collateral');
const loanAPI = require('./modules/loan');

app.use(cors());
app.use(bodyParser.json());
app.use("/api/collateral", collateralAPI);
app.use("/api/loan", loanAPI);

module.exports = app;