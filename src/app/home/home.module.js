angular.module('app.home', [
  'ui.router',
  'home.controllers',
  'home.services',
  'ngMap'
])

.config(function config($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'home/views/home.tpl.html'
  });
});
