const fs = require('fs');

var contacts = [];

var fetchContacts = () => {
    try {
        var contactsList = fs.readFileSync('./data/');
        return contactsList;
    } catch (e) {
        console.log('Error fetching contacts');
    }
};

var addContact = (name, number) => {

    var contact = {
        name,
        number
    };

    contacts.push(contacts);
};


module.exports = {
    addContact
}
