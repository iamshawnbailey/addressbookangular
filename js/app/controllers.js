var addressBookControllers = angular.module('addressBookControllers', []);

addressBookControllers.controller('ContactListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

addressBookControllers.controller('ContactDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
	$http.get('data/phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });
  }]);