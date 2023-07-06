const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'must provide a name']
    },
    mail: {
        type: String,
        required: [true, 'must provide an email']
    }
});

module.exports = model('User', userSchema);