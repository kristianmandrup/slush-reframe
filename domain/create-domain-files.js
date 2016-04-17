var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    path = require('path'),
    chalk = require('chalk-log');
    util = require('util');

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
  var rootAnswers =  Object.create(answers);
  rootAnswers.type = name;

  chalk.log(util.inspect(rootAnswers));

  gulp.src(__dirname + '/templates/_domain.cljs')
      .pipe(template(rootAnswers))
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

  var index1 = 0;
  var index2 = 0;
  // build cljs require statements for insertion in domain root files
  for (index1 = 0; index1 < files.length; index1+=1) {
    var file = files[index1];
    answers.req[file] = [];
    var temp = [];
    for (index2 = 0; index2 < domainTypes.length; index2+=1) {
      var domainType = domainTypes[index2]; 
      temp.push('[' + namespace + '.' + domain + '.' + domainType + '.' + file + ']');
    }
    answers.req[file] = temp.join('\n            ')
  }

  

  chalk.log('creating root domain files...');
  chalk.log(files);
  for (index1 = 0; index1 < files.length; index1+=1) {
    var name = files[index1];
    createRootDomainFiles(filePath, name, answers)
  }


  // create domain files for:
  // - item
  // - list
  for (index1 = 0; index1 < domainTypes.length; index1+=1) {
    var dt = domainTypes[index1];
    createDomainFiles(dt, filePath, answers);
  }

}
