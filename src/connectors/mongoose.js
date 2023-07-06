const mongoose = require('mongoose');
const environment = require('./environment');
const uri = environment.db.uri;

mongoose.connect(uri , { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to mongoDB!');
});

module.exports = mongoose;
