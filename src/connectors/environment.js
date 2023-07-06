require('dotenv').config();

// This module was created to centralize all the environment variables, in order that no variable is get using process.env in other modules
const environment = {
    server: {
        port: process.env.PORT || 3001
    },
    db: {
        uri: process.env.DB_URI
    }
};

module.exports = environment;
