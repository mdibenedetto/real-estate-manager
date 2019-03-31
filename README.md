# Real estate manager

# NB: THIS INFORMATION ARE OUTDATED

Test link: https://michele2014.github.io/real-estate-manager/

This project show how to implement a simple Routing with lazyload.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.
This project was ejected using the commands:
-  `ng eject` which created the file webpack.config-dev.js
- `ng eject -prod` which created the webpack.config-prod.js

# NB
Although this  project was ejected you can stil use the `ng` command since the flag "ejected" is `false`
If you want to disable the `ng` command you can just set the flag "ejected" is `true`
[See File] .angular-cli.json
  "project": { 
    "ejected": false
  },

# Possible issue when you install
- In case of permission installing issue look at: https://github.com/angular/angular-cli/issues/6800 and https://docs.npmjs.com/getting-started/fixing-npm-permissions
- So far angular cli is installed and you are able to use `ng` commna you can skip those errors.

# Pre-requirement 
- [NodeJS](https://nodejs.org/en/download/)
- Install Angular CLI: `npm install -g @angular/cli`

# Install dependencies
- Run `npm install`  

## Development server
Run:
- `ng serve`: rely on .angular-cli.json 
- `npm start`: rely on webpack.config-dev.js
 for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run one of the following commands:
- `ng build`: compile a development bundle and rely on .angular-cli.json
- `npm run build-dev`: compile a development bundle and rely on webpack.config-dev.js
- `npm run build-prod`: compile a production bundle and rely on webpack.config-prod.js

to build the project. The build artifacts will be stored in the  
- `dist/deploy`
- `dist/dev`
- `dist/prod`
directory. Use the `-prod` flag for a production build.

# Publish on Github Pages:
- Install gh-pages:  `npm run gh-install` or `npm i -g gh-pages`
- build: `npm run gh-build`. Remind to replace "https://michele2014.github.io/real-estate-manager" with your own github page url
- deploy: `npm run gh-deploy`
- Build and Deploy: `npm run gh-b-d`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


