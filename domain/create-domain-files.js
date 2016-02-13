var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    path = require('path'),
    chalk = require('chalk-log');

function createDomainFiles(type, filePath, answers) {
  var fileDestination = filePath + '/' + type;

  chalk.log('creating ' + type + ' domain files...' + fileDestination);
  gulp.src(__dirname + '/templates/' + type + '/**')
      .pipe(template(answers))
      .pipe(rename(function (file) {
      }))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./' + fileDestination))
      .pipe(install())
      .on('end', function () {
          chalk.info('Remember:');
          chalk.log('git add .');
          done();
      });
}

function createRootDomainFiles(filePath, name, answers) {
  var fileDestination = filePath;

  chalk.log('creating root domain file ' + name + ' : ' + fileDestination);
  answers.type = name;
  gulp.src(__dirname + '/templates/_domain.cljs')
      .pipe(template(answers))
      .pipe(rename(function (file) {
          if (file.basename[0] === '_') {
              file.basename = name;
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
    var temp = [];
    for (domainType of domainTypes) {
      temp.push('[' + namespace + '.' + domain + '.' + domainType + '.handlers]');
    }
    answers.req[file] = temp.join('\n            ')
  }


  chalk.log('creating root domain files...');
  for (name of files) {
    createRootDomainFiles(filePath, name, answers)
  }


  // create domain files for:
  // - item
  // - list
  for (type of domainTypes) {
    createDomainFiles(type, filePath, answers);
  }

}
