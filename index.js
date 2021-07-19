const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const apiRoute = require('./routes/user');

const app = express();

dotenv.config();

mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    err => {
        if (err) return console.log(`Encountered error: ${err}`);
        return console.log('Connected to MongoDB...');
    });

app.use(express.json());
app.use('/api/users', apiRoute);

app.listen(3000, () => {
    console.log('Server started...');
});