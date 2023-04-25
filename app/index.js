import angular from 'angular';

// Create the module where our functionality can attach to
let appModule = angular.module('app', []);

// Controllers
import AppCtrl from './app.controller';
appModule.component('appComponent', {
  templateUrl: 'app/app.template.html',
  controller: AppCtrl
});

export default appModule;
