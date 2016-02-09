/*
 * slush-reframe
 * https://github.com/kristianmandrup/slush-reframe
 *
 * Copyright (c) 2015, Kristian Mandrup
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp');
var path = require('path');
var chalk = require('chalk-log');

function format(string) {
    var username = string.toLowerCase();
    return username.replace(/\s/g, '');
}

let tasks = {};
tasks.default = require('./domain')({});
gulp.task('domain', tasks.default);

// TODO: read from package.json!!!
var packInfo = require('./package.json');

chalk.note('Reframe domain generator: v.' + packInfo.version);

