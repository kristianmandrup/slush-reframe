# Slush-reframe [![Build Status](https://secure.travis-ci.org/kristianmandrup/slush-reframe.png?branch=master)](https://travis-ci.org/kristianmandrup/slush-reframe) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-reframe.png)](http://badges.enytc.com/for/npm/slush-reframe)

> Reframe generator


## Getting Started

Install `slush-reframe` globally:

```bash
$ npm install -g slush-reframe
```

## Usage

### Create new Re-frame project

Create a new re-frame project using:

[re-frame-template](https://github.com/Day8/re-frame-template)

```bash
$ lein new re-frame <project-name>
```

Note that you can also customize which additional libs to integrate:

```bash
$ lein new re-frame <project-name> +garden +re-com +routes +test
```

### Populate re-frame project with domain files

```bash
$ cd <project-name>
```

Run the generator from within the new project folder:

```bash
$ slush reframe
```

Answer the prompts:

```
- What is the singular name of your domain model? todo

- Which domain types would you like?
x item
x list

- What is the container namespace of this domain? app

- Where shall I put the domain files? src/cljs/domain
+ src/cljs/domain/todo/item
+ src/cljs/domain/todo/item/handlers.cljs
+ src/cljs/domain/todo/item/queries.cljs
+ src/cljs/domain/todo/item/subscribers.cljs
+ src/cljs/domain/todo/item/utils.cljs
+ src/cljs/domain/todo/item/views.cljs

+ src/cljs/domain/todo/list
+ src/cljs/domain/todo/list/handlers.cljs
+ src/cljs/domain/todo/list/queries.cljs
+ src/cljs/domain/todo/list/subscribers.cljs
+ src/cljs/domain/todo/list/utils.cljs
+ src/cljs/domain/todo/list/views.cljs

+ src/cljs/domain/todo/list
+ src/cljs/domain/todo/handlers.cljs
+ src/cljs/domain/todo/queries.cljs
+ src/cljs/domain/todo/subscribers.cljs
+ src/cljs/domain/todo/utils.cljs
+ src/cljs/domain/todo/views.cljs
```

These domain files should create a solid foundation for building your domain logic, divided into logical parts that work well with re-frame. The functions and files generated follow conventions that make it easy to navigate and understand your project/code structure.

Please feel free to customize the templates of the slush generator to best fit your needs...

## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/slushjs/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/kristianmandrup/slush-reframe/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/kristianmandrup/slush-reframe/issues).

## License 

The MIT License

Copyright (c) 2016, Kristian Mandrup

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

