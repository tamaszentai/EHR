const express = require('express');
const bodyParser = require('body-parser');
// const {Client} = require('pg');
// const client = new Client({
//   user: "postgres",
//   password: "tamaszentai",
//   host: "localhost",
//   port: 5432,
//   database: "EHR"
// })


const patientRoutes = require('./routes/patientRoutes');
const orderTypeRoutes = require('./routes/orderTypeRoutes');
const patientOrderRoutes = require('./routes/patientOrderRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/patients', patientRoutes)
app.use('/api/ordertypes', orderTypeRoutes);
app.use('/api/patientorders', patientOrderRoutes);

// client.connect()
// .then(() => console.log("Connected successfuly to the Database, server is started!"))
// .then(() => app.listen(5000))
// .catch((err) => console.log(err))
// .finally(() => client.end())

app.listen(5000);