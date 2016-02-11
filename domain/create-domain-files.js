var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    path = require('path'),
    chalk = require('chalk-log');

function createDomainFiles(type, filePath, answers) {
  var fileDestination = filePath + '/' + type

  chalk.log('creating ' + type + ' domain files...');
  gulp.src(__dirname + '/templates/type/' + type + '/**')
      .pipe(template(answers))
      .pipe(rename(function (file) {
          if (file.basename[0] === '_') {
              // create full domain file name such as:
              // todo-views.cljs (or item-views.cljs ??)
              // file.basename = answers.domain + '-' + file.basename.slice(1);
          }
      }))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./' + fileDestination))
      .pipe(install())
      .on('end', function () {
          done();
      });
}

module.exports = function(answers) {
  answers.req = {};
  var domain = answers.domain;
  var domainTypes = answers.domainTypes;
  var namespace = answers.namespace;
  var files = answers.files;

  // Such as: src/cljs/app/todo
  var filePath = answers.location + '/' + answers.namespace + '/' + answers.domain;

  // build cljs require statements for insertion in domain root files
  for (file of files) {
    answers.req[file] = [];

    for (domainType of domainTypes) {
      answers.req[file].push('(:require ' + domain + '.' + domainType + '.handlers)');
    }
  }

  var fileDestination = filePath;

  chalk.log('creating root domain files...');
  gulp.src(__dirname + '/templates/domain/**')
      .pipe(template(answers))
      .pipe(rename(function (file) {
          if (file.basename[0] === '_') {
              // create full domain file name such as:
              // todo-views.cljs
              // file.basename = answers.domain + '-' + file.basename.slice(1);
          }
      }))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./' + fileDestination))
      .pipe(install())
      .on('end', function () {
          done();
      });

  // create domain files for:
  // - item
  // - list

  for (type of domainTypes) {
    createDomainFiles(type, filePath, answers);
  }
}
