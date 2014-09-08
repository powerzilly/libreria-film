'use strict';

/* Controllers */

var filmControllers = angular.module('filmControllers', []);

filmControllers.controller('FilmListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('films/films.json').success(function(data) {
      $scope.films = data;
    });

  }]);

filmControllers.controller('FilmDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.filmId = $routeParams.filmId;
  }]);