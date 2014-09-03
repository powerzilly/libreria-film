'use strict';

/* Controllers */

var filmApp = angular.module('filmApp', []);

filmApp.controller('FilmListCtrl', function($scope) {
  $scope.films = [
    {'name': 'Film 1',
     'snippet': 'Descrizione film 1',
	 'photo': 'img/img1.jpg'},
    {'name': 'Film 2',
     'snippet': 'Descrizione film 2',
	 'photo': 'img/img1.jpg'},
    {'name': 'Film 3',
     'snippet': 'Descrizione film 3',
	 'photo': 'img/img1.jpg'}
  ];
});