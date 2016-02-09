'use strict';

var _         = require('underscore.string'),
    inquirer  = require('inquirer'),
    path      = require('path'),
    chalk     = require('chalk-log');

module.exports = function() {
    return function (done) {
        var prompts = [
        {
            name: 'domain',
            message: 'What is the singular name of your domain',
            default: 'todo',
        },
        {
            type: 'list',
            name: 'domainTypes',
            choices: ['item, list'],
            message: 'Which domain types would you like?',
            default: ['item, list'],
        },
        {
            name: 'namespace',
            message: 'What is the container namespace of this domain?',
            default: 'app',
        },
        {
            name: 'location',
            message: 'Where shall I put the domain files?',
            default: 'src/cljs/domain',
        },
        {
            type: 'confirm',
            name: 'moveon',
            message: 'Continue?'
        }];
        //Ask
        inquirer.prompt(prompts,
            function (answers) {
                if (!answers.moveon) {
                    return done();
                }
                require('./create-domain-files')(answers);
            }
        );
    }
}
