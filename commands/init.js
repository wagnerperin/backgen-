module.exports = () => {
    const argv = require('yargs').argv;
    const inquirer = require('inquirer');
    const fs = require('fs');
    const path = require('path');
    const questions = require('../core/questions');
    const ncp = require('ncp').ncp;
    
    const command = argv._[0];

    switch(command){
        case 'init':
            inquirer.prompt(questions('initial')).then(answers => {
                answers = {
                    ...answers,
                    main: "index.js",
                    scripts:{
                        start: "node index.js"
                    },
                    "dependencies": {
                        "express": "^4.16.4",
                        "body-parser": "^1.18.3",
                        "consign": "^0.1.6",
                        "uuid": "^3.3.2",
                        "dotenv": "^6.2.0"
                    }
                }
                if(argv.dir !== ".") 
                    if(fs.existsSync(path.join(process.cwd(), argv.dir))) throw new Error('Can\'t create this project, this folder name already exists.');
                    else { 
                        fs.mkdirSync(path.join(process.cwd(), argv.dir), { recursive: true });
                        process.chdir(path.join(process.cwd(), argv.dir))
                    }
                fs.writeFileSync(path.join(process.cwd(), 'package.json'), JSON.stringify(answers, null, 2));
                ncp(path.join(require.main.filename,'../references'), './', (err) => {
                    if(err) console.log(err);
                });
            });

            break;
    }
}