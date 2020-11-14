const express = require('express');
const bodyParser = require('body-parser');

const patientRoutes = require('./routes/patientRoutes');
const orderTypeRoutes = require('./routes/orderTypeRoutes');

const app = express();

app.use('/api/patients', patientRoutes)
app.use('/api/ordertypes', orderTypeRoutes);

app.use(bodyParser.json());

app.listen(5000);