const os = require('os');

// console.log( os.cpus() );
console.log( os.freemem() );
console.log( os.totalmem() );

if( os.freemem() < os.totalmem() ){
    console.log('Free Memory is less');
}