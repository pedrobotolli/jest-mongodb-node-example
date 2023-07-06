const express = require('express');
const app = express();
const userRouter = require('./routes/users')

app.use(express.json())

app.use('/users', userRouter)


app.get('/', (req, res) => {
    res.status(200).send();
});

module.exports = app;
