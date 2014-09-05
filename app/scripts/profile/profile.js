(function() {
  'use strict';
  var configBlock = ['$stateProvider',function(State) {
    State
      .state('app.profile', {
        url: '/dashboard',
        template: 'profile.html',
        controller: 'ProfileController'
      });
  }];

  angular.module('app.profile', ['classy'])
  .config(configBlock)
  .classy.controller({
    name: 'ProfileController',

    init: function() {

    },

    inject: ['$scope']
  });
}());
