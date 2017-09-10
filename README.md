# README

This is the source code to my portfolio.

## Setup

Install RVM and Ruby first

```
$ gem install bundler --no-ri --no-rdoc
$ bundle install
```
## Setup

```
$ rvm install $(cat .ruby-version)
$ rvm gemset create $(cat .ruby-gemset)
$ rvm use $(cat .ruby-version)-$(cat .ruby-gemset)
$ gem install bundler
$ bundle install
```

## Building

```
$ middleman
```

## Deployment

```
$ middleman deploy
```

## License

Copyright 2016 Florian Dejonckheere all rights reserved

## Contributing

Please don't.
