const fs = require('fs');

var contacts = [];

var fetchContacts = () => {
    try {
        var contactsList = fs.readFileSync('./data/contacts-data.json');
        return contactsList;
    } catch (e) {
        console.log('Error fetching contacts');
    }
};

var saveContact = (contacts) => {
    fs.writeFileSync('./data/contacts-data.json', JSON.stringify(contacts));
};

var addContact = (name, number) => {

    var contact = {
        name,
        number
    };

    var duplicateContacts = contacts.filter((contact) => contact.name === name);

    contacts.push(contact);
    saveContact(contact);
};

var getAll = () => {
    console.log();
    
    return fetchContacts();
};

var getContact = (title) => {

    var contacts = fetchContacts();

    var filterContacts = contacts.filter((contact) => contact.name === name);
    return filterContacts[0];
};

var removeContact = (name) => {
    console.log('Deleting Contact....');
    
    var contacts = fetchContacts();
    try {
        var filterContacts = contacts.filter((contact) => contact.name === name);
        saveContact(filterContacts);
        // Returns true upon successful removal of a contact and false 
        return contacts.length === filterContacts.length;
    } catch (error) {
        console.log(`An error ocurred deleting contacting`);
        
    }
    // // Returns true upon successful removal of a contact and false 
    // return contacts.length !== filterContacts.length;
};

var logger = (contact) => {
    console.log('------------------------');
    console.log(`Name ${contact.name}`);
    console.log(`Number ${contact.number}`);
    console.log('------------------------');      
};


module.exports = {
    addContact,
    getAll,
    getContact,
    removeContact,
    logger
};
