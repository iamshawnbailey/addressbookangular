var addressBookServices = angular.module('addressBookServices', ['ngResource']);

addressBookServices.factory('Contact', ['$resource',
  function($resource){
    return $resource('http://localhost:8080/rest/get/contacts', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);