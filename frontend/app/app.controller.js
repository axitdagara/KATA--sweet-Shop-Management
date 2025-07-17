angular.module('SweetShopApp')
.controller('SweetController', function($scope, SweetService) {
  $scope.sweets = [];
  $scope.newSweet = {};
  $scope.searchTerm = '';
  $scope.sortBy = 'name';

  $scope.loadSweets = function() {
    SweetService.getAllSweets().then(function(res) {
      $scope.sweets = res.data;
    });
  };

  $scope.addSweet = function() {
    SweetService.addSweet($scope.newSweet).then(function() {
      $scope.newSweet = {};
      $scope.loadSweets();
    });
  };

  $scope.updateSweet = function(sweet) {
    SweetService.updateSweet(sweet).then($scope.loadSweets);
  };

  $scope.deleteSweet = function(id) {
    SweetService.deleteSweet(id).then($scope.loadSweets);
  };

  $scope.loadSweets();
});
