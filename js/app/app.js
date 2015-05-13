var addressBookApp = angular.module('addressBookApp', [
  'ngRoute',
  'addressBookControllers',
  'addressBookFilters'
]);

addressBookApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/contacts', {
        templateUrl: 'partials/contact-list.html',
        controller: 'ContactListCtrl'
      }).
      when('/contacts/:contactId', {
        templateUrl: 'partials/contact-detail.html',
        controller: 'ContactDetailCtrl'
      }).
      otherwise({
        redirectTo: '/contacts'
      });
  }]);