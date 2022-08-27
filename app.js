const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const collateralAPI = require('./modules/collateral');

// Collateral
app.use(bodyParser.json());
app.use("/api/collateral", collateralAPI);

module.exports = app;