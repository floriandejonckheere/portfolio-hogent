# README

This is the ePortfolio, an assignment for Web Applications I. It uses a Grunt build system in order to compile the SCSS stylesheets. The source HTML files are in the `src/html` directory, which uses a templating system to insert the headers and footers in each document. The source SCSS files are in the `src/scss` folder.

The compiled files are available in the `dist` folder.

This site has been developed for Firefox. Any other browser is not (yet) supported.

## Building

Development:

```
$ bundle install
$ npm install
$ bower install
$ grunt watch
```

Use the following command to deploy the site to an FTP server

```
$ grunt deploy
```

## License

Copyright 2016 Florian Dejonckheere all rights reserved

## Contributing

Please don't.
