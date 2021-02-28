const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

/* Controller routes */
const drinkRouter = require('./routes/drink');
const drinkCommentsRouter = require('./routes/drinkComments');
const adminRouter = require('./routes/admin');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/drinks', drinkRouter);
app.use('/drinkComments', drinkCommentsRouter);
app.use('/admin', adminRouter);

app.listen(process.env.PORT || 5000);