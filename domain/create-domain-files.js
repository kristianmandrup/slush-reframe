var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    path = require('path'),
    chalk = require('chalk-log');

function createDomainFiles(type, answers, done) {
  var fileDestination = answers.location + '/' + answers.namespace '/' + answers.domain);

  gulp.src(__dirname + '/templates/type/' + type + '/')
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
  for (file in ['handlers', 'queries', 'subscribers', 'utils', 'views']) {
    answers.req[file] = [];

    for (domainType in domainTypes) {
      answers[file].push('(:require ' + domain '.' + domainType + '.handlers)');
    }
  }

  for (type in answers.domainTypes) {
    createDomainModels(type, answers, done);
  }

  var fileDestination = answers.location + '/' + answers.namespace '/' + answers.domain);

  gulp.src(__dirname + '/templates/root/')
      .pipe(template(answers))
      .pipe(rename(function (file) {
          if (file.basename[0] === '_') {
              // create full domain file name such as:
              // todo-views.cljs
              file.basename = answers.domain + '-' + file.basename.slice(1);
          }
      }))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./' + fileDestination))
      .pipe(install())
      .on('end', function () {
          done();
      });
}
