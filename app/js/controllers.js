'use strict';

/* Controllers */

var filmControllers = angular.module('filmControllers', []);

filmControllers.controller('FilmListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('films/films.json').success(function(data) {
      $scope.films = data;
    });
      
   $scope.save = function() {
    /*$http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
      $scope.msg = 'Data saved';
    });*/
    $scope.msg = 'Data sent: '+ JSON.stringify($scope.languages);
  };
      
    $scope.orderProp = 'name';  
  }]);

filmControllers.controller('FilmDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.filmId = $routeParams.filmId;
  }]);  



  