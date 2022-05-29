require('dotenv').config();
const cors = require('cors');
const path = require('path');
const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const mongoString = "mongodb+srv://usertest:usertest@cluster0.oxuc4.gcp.mongodb.net/?retryWrites=true&w=majority";
const bodyParser = require('body-parser');
mongoose.connect(mongoString);
const database = mongoose.connection;
const router = express.Router();
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

const routes = require('../routes/routes');

app.use(bodyParser.json());
app.use('/.netlify/functions/server', routes);  // path must route to lambda
// app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));


app.use('/api', routes)

module.exports = app;
module.exports.handler = serverless(app);
// app.listen(3000, () => {
//     console.log(`Server Started at ${3000}`)
// });
