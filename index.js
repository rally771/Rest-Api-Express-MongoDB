require('dotenv').config();
const cors = require('cors');
const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const mongoString = "mongodb+srv://usertest:usertest@cluster0.oxuc4.gcp.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');

app.use('/api', routes)

serverless(app)
// app.listen(3000, () => {
//     console.log(`Server Started at ${3000}`)
// });
