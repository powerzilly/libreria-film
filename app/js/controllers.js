'use strict';

/* Controllers */

var filmControllers = angular.module('filmControllers', []);

filmControllers.controller('FilmListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('films/films.json').success(function(data) {
      $scope.films = data;
    });
      
    $scope.orderProp = 'name';  
  }]);

filmControllers.controller('FilmDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.filmId = $routeParams.filmId;
  }]);  


filmControllers.controller('FilmUploadCtrl', ['$scope', '$http',
  function filmUploadCtrl($scope, $http) {
  $scope.update = function(film) {
    $http.post('api/films', film)
      .success(function(data, status) {
         alert("Salvataggio effettuato!");
      })
      .error(function(data, status) {
         alert("Si è verificato un problema durante il salvataggio!");
      });
  }
 
  $scope.reset = function() {
    $scope.film = {};
  }
               
  }]);      