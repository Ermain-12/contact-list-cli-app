const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const contacts = require('./contacts');
const program = require('commander');

var cmdargs = process.argv;
var inputArgs = process.argv[2];
// console.log(cmdargs);
// console.log(inputArgs);

const nameOptions = {
        describe: 'Contact Name',
        demand: true,
        alias: 'n'
};

const numberOptions = {
        describe: 'Contact Number',
        demand: true,
        alias: 'num'
};

const argv = yargs
                  .command('add', 'Add a new contact', {
                      name: nameOptions,
                      number: numberOptions
                  })
                  .command('list', 'List all contact')
                  .command('read', 'Read a contact', {
                      name: nameOptions
                  })
                  .command('remove', 'Remove a contact', {
                      name: nameOptions
                  })
                  .help()
                  .argv;

var command = argv._[0];

program
       .version('0.01')
       .option('-help -h [help]', 'Follow your commands with add, list, read or remove')
       .parse(process.argv);

let questions = [
    {
        type : "input",
        name : "name",
        message : "Contact Name - "
    },
    {
        type : "input",
        name : "number",
        message : "Contact Name - "
    }
];       

// program 
//         .command('addContact')
//         .alias('-a')
//         .description('Add a contact')
//         .action(() => {
//             prompt(questions).then((answers) => 
//                 contacts.addContact(answers));
//         });


if (command === 'add') {
    console.log('Adding contact');
    var contact = contacts.addContact(argv.name, argv.number);
    if(contact){
        console.log(`Contact ${name} successfully added`);
        contacts.logger(contact);
    }else{
        console.log('Error adding contact');     
    }
    
} else if(command === 'list') {
    console.log('Retreiving contact...');

    var contactList = contacts.getAll();

    contactList.forEach((contact) => contacts.logger());
}else if(command === 'read'){
    console.log('');
    
    console.log('Reading contacts');
}else if(command === 'remove'){
    console.log('Removing command');   
}else{
    console.log('Command not understood');
}
