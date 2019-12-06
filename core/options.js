let options = {
    init:{
        directory: {
            alias: ['dir', 'd'],
            default: '.',
            describe: 'Directory name',
            demand: false
        }
    },

    create:{
        route: {
            alias: ['route', 'r'],
            default: '/v1/',
            describe: 'Path route',
            demand: false
        }
    }
}

module.exports = (op) => {
    return options[op];
}