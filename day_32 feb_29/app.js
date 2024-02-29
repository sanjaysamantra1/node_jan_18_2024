const express = require('express');
const userRouter = require('./user')
const productRouter = require('./product')

const app = express();

app.use('/users', userRouter);
app.use('/products', productRouter);

app.listen(5000, console.log, 'server running at port 5000')