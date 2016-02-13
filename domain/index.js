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
            message: 'Domain name',
            default: 'todo'
        },
        {
            type: 'checkbox',
            name: 'domainTypes',
            choices: ['item', 'list'],
            message: 'Domain types',
            default: ['item', 'list']
        },
        {
            type: 'checkbox',
            name: 'files',
            choices: ['handlers', 'queries', 'subscribers', 'utils', 'views'],
            message: 'Files',
            default: ['handlers', 'queries', 'subscribers', 'utils', 'views']
        },


        {
            name: 'namespace',
            message: 'Container namespace',
            default: 'my-app'
        },
        {
            name: 'location',
            message: 'Destination path',
            default: 'src/cljs'
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
