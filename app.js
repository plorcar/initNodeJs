const os = require('os');
const fs = require('fs');

const mine = require('./adicional.js');
let cpu = os.cpus();
let sistema = os.platform();
let hostname = os.hostname();


mine.Muestra();
console.log(mine.paso_var);
/*
let cpu_string = JSON.stringify(cpu);
fs.appendFile('lordka.txt',`Información el CPU: ${cpu_string} ` ,(error)=>{
    if (error){console.log('Hubo un error en el archivo')}
});*/
 