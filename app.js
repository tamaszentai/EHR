const express = require('express');
const bodyParser = require('body-parser');

const patientRoutes = require('./routes/patientRoutes');
const orderTypeRoutes = require('./routes/orderTypeRoutes');
const patientOrderRoutes = require('./routes/patientOrderRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/patients', patientRoutes)
app.use('/api/ordertypes', orderTypeRoutes);
app.use('/api/patientorders', patientOrderRoutes);


app.listen(5000);