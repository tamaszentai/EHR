const express = require('express');
const bodyParser = require('body-parser');

const orderTypeRoutes = require('./routes/orderTypeRoutes');

const app = express();

app.use('/api/ordertypes', orderTypeRoutes);

app.use(bodyParser.json());

app.listen(5000);