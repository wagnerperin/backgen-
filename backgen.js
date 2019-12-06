#!/usr/bin/env node
const init = require ('./commands/init');
const create = require ('./commands/create');
const options = require ('./core/options');

const argv = require('yargs')
    .help()
    .alias('help', 'h')
    .version()
    .alias('version', 'v')
    .usage('Usage: backgen <command>')
    .command('init', 'Initialize a new basic project', options('init'), init)
    .command('create', 'Initialize a new basic project', options('create'), create)
    .demandCommand(1, 'You need at least one command')
    .argv;