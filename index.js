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

var defaults = (function () {
    var workingDirName = path.basename(process.cwd()),
      homeDir, osUserName, configFile, user;

    if (process.platform === 'win32') {
        homeDir = process.env.USERPROFILE;
        osUserName = process.env.USERNAME || path.basename(homeDir).toLowerCase();
    }
    else {
        homeDir = process.env.HOME || process.env.HOMEPATH;
        osUserName = homeDir && homeDir.split('/').pop() || 'root';
    }

    configFile = path.join(homeDir, '.gitconfig');
    user = {};

    if (require('fs').existsSync(configFile)) {
        user = require('iniparser').parseSync(configFile).user;
    }

    return {
        appName: workingDirName,
        userName: osUserName || format(user.name || ''),
        authorName: user.name || '',
        authorEmail: user.email || ''
    };
})();

let tasks = {};
tasks.default = require('./default')(defaults);
gulp.task('default', tasks.default);

// TODO: read from package.json!!!
var packInfo = require('./package.json');

chalk.note('Reframe generator: v.' + packInfo.version);

// Generators
for (let name of ['app', 'domain']) {
  tasks[name] = require('./' + name)();
  gulp.task(name, tasks[name]);
}
