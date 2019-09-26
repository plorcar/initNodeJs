const _=require('lodash');
const argv = require('yargs').argv;

console.log(argv);
//let comando = process.argv[2];
//console.log(comando);

if (argv.usuario==='plorca'){
        let x={"nombre":"plorca"};
        let y={"apodo":"Lordka"};
        
        let z =[
            {nombre:"pablo", apellido:"Lorca",edad:38},
            {nombre:"Naty", apellido:"Ponce",edad:32}
        ]
        
        //let resultado  = _.assign(x,y);
        //console.log(resultado);
        //_.times(3,()=>console.log("impime 3 veces"));
        
        let resultado = _.find(z, {edad:32});
        console.log(resultado);
    }else{
        console.log('usuario mo existe');
 }



