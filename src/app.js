const express = require('express');
const app = express();
const router = express.Router();
var cors = require('cors');

var allowedOrigins = ['http://localhost:3000'];
app.use(cors());

//Rotas
const index = require('./routes/index');
const foodRoute = require('./routes/foodRoute');
const userRoute = require('./routes/userRoute');
app.use('/', index);
app.use('/food', foodRoute);
app.use('/user', userRoute);

module.exports = app; 

