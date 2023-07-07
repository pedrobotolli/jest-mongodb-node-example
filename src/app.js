const express = require('express');
const app = express();
const userRouter = require('./routes/users');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json());

app.use('/api/v1/users', userRouter);

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});
app.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

module.exports = app;
