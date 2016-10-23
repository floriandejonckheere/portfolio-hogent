# README

This is the ePortfolio, an assignment for Web Applications I. It was hand-built using Angular, jQuery and a custom CSS microframework. It uses NPM and Bower for dependency management, and Grunt as taskrunner.

## Setup

```
$ rvm install $(cat .ruby-version)
$ rvm gemset create $(cat .ruby-gemset)
$ rvm use $(cat .ruby-version)-$(cat .ruby-gemset)
$ gem install bundler
$ bundle install
$ npm install
$ bower install
```

## Building

```
$ grunt build
$ darkhttpd dist/ --daemon
$ grunt watch
```

## Deployment

```
$ ENV=staging grunt deploy
```

## License

Copyright 2016 Florian Dejonckheere all rights reserved

## Contributing

Please don't.
