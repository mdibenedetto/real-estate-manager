// import { version, dependencies } from '../../package.json';
import * as pkg from '../../package.json';

export const environment = {
  production: false,
  useHash: true,
  envName: 'ghp',
  VERSION: pkg?.version,
  AngularCore: pkg?.dependencies["@angular/core"]
};
