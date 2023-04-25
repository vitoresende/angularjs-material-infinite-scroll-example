import angular from 'angular';
import 'angular-material';
import 'angular-messages';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './app/index.js';

// Create and bootstrap application
const requires = ['app', 'ngMaterial', 'ngMessages'];
const app = angular.module('appRoot', requires);
app.config(['$mdGestureProvider', '$mdThemingProvider', function($mdGestureProvider, $mdThemingProvider) {
  $mdGestureProvider.skipClickHijack();
  $mdThemingProvider.theme('default')
    .primaryPalette('purple')
    .accentPalette('green');
}])
window.app = app;
