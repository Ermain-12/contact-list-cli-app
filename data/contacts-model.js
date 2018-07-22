const mongoose = require('mongoose');

const db = mongoose.connect('');

// Define the database schema for the app
const contactSchema = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    phoneNumber: {type: String},
    email: {type: String}
});

// This creates an interface for the DB schema when the app connects to the database
const contactModel = mongoose.model('Contacts', contactSchema);
