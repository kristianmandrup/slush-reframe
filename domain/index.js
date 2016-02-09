'use strict';

var _         = require('underscore.string'),
    inquirer  = require('inquirer'),
    path      = require('path'),
    chalk     = require('chalk-log');

module.exports = function() {
    return function (done) {
        var prompts = [
        {
            name: 'name',
            message: 'What is the singular name of your domain model',
            default: 'todo',
        },
        {
            type: 'list',
            name: 'domainModels',
            choices: ['item, list'],
            message: 'Which domain types would you like?',
            default: ['item, list'],
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
