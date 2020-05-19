import { version, dependencies } from '../../package.json';

export const environment = {
  production: false,
  useHash: true,
  envName: 'ghp',
  VERSION: version,
  AngularCore: dependencies["@angular/core"]
};