'use strict';

/* Controllers */

var filmApp = angular.module('filmApp', []);

filmApp.controller('FilmListCtrl', function($scope, $http) {
    $http.get('films/films.json').success(function(data) {
  $scope.films = data;
        });
                                          
});