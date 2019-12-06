module.exports = () => {
const argv = require('yargs').argv;
const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;
    

const command = argv._[0];


if(command == 'create'){
    const func_name = argv._[1]
    switch(func_name){
       case 'route':
            var route_name = argv._[2]
            route_name = route_name + '.js'
            api_name = process.cwd() + '/app/api/' + route_name
            route_infolder_name = process.cwd() + '/app/routes/' + route_name
            
            fs.writeFileSync(api_name,'vamo vê')
            fs.writeFileSync(route_infolder_name,'vamo vê')
    }

}
}