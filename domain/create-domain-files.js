var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    path = require('path'),
    chalk = require('chalk-log');

function createDomainFiles(type, answers, done) {
  var fileDestination = answers.location + '/' + answers.name);

  gulp.src(__dirname + '/templates/' + type)
      .pipe(template(answers))
      .pipe(rename(function (file) {
          if (file.basename[0] === '_') {
              // create full domain file name such as:
              // todo-views.cljs
              file.basename = answers.name + '-' + file.basename.slice(1);
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
  for (type in answrs.domainModels) {
    createDomainModels(type, answers, done);
  }
}
