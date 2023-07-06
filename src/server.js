const environment = require('./connectors/environment')
const port = environment.server.port;
const app = require('./app');
const mongoose = require('./connectors/mongoose')

app.listen(port, () => {console.log(`App listening on port: ${port}...`)});
