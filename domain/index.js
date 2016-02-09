'use strict';

var _         = require('underscore.string'),
    inquirer  = require('inquirer'),
    path      = require('path'),
    chalk     = require('chalk-log');

module.exports = function() {
    return function (done) {
        var prompts = [{
            type: 'list',
            name: 'domainModels',
            choices: ['item, list'],
            message: 'Which domain models?',
            default: ['item, list'],
        }, {
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
                require('./create-components')(answers);
            }
        );
    }
}
