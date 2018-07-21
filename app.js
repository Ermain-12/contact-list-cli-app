const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const contacts = require('./contacts');

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
                      nameOptions,
                      numberOptions
                  })
                  .command('list', 'List all contact')
                  .command('read', 'Read a contact', {
                      nameOptions
                  })
                  .command('remove', 'Remove a contact')
                  .help()
                  argv;

var command = argv._[0];

if (command === 'add') {
    console.log('Listing contacts');
    
} else if(command === 'list') {
    console.log('Adding contact...');
}else if(command === 'read'){
    console.log('Reading contacts');
}else if(command === 'Remove'){
    console.log('Removing command');   
}else{
    console.log('Command not understood');
}
