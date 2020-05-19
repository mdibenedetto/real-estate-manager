import { version, dependencies } from '../../package.json';

export const environment = {
  production: true,
  envName: 'prod',
  VERSION: version,
  AngularCore: dependencies["@angular/core"]
};