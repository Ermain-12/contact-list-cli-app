const os = require('os');
const fs = require('fs');
const contacts = require('./contacts');

var cmdargs = process.argv;
var inputArgs = process.argv[2];
console.log(cmdargs);
console.log(inputArgs);

if (inputArgs === 'list') {
    console.log('Listing contacts');
    
} else if(inputArgs === 'add') {
    console.log('Adding contact...');
}else{
    console.log('Command not understood');
}
