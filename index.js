const express = require('express');
const cors = require('cors');
const productRoute = require('./routes/productRoute');
const commentRoute = require('./routes/commentRoute');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.use(cors());
app.use(express.json({ limit: '10kb' }));

app.use('/api/products', productRoute);
app.use('/api/comments', commentRoute);

app.use(globalErrorHandler);
module.exports = app;