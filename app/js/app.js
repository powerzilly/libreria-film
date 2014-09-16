'use strict';

/* App Module */


var filmApp = angular.module('filmApp', [
'ngRoute',
'filmControllers'
]);
filmApp.config(['$routeProvider',
function($routeProvider) {
$routeProvider.
    when('/films', {
        templateUrl: 'partials/film-list.html',
        controller: 'FilmListCtrl'
}).
    when('/films/upload', {
        templateUrl: 'partials/film-upload.html',
        controller: 'FilmUploadCtrl'
}).
    when('/films/:filmId', {
        templateUrl: 'partials/film-detail.html',
        controller: 'FilmDetailCtrl'
}).
    otherwise({
        redirectTo: '/films'
});
}]);