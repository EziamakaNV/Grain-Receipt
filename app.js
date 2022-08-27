const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const collateralAPI = require('./modules/collateral');
const loanAPI = require('./modules/loan');

// Collateral
app.use(bodyParser.json());
app.use("/api/collateral", collateralAPI);
app.use("/api/loan", loanAPI);

module.exports = app;