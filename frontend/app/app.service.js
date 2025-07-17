angular.module('SweetShopApp')
.service('SweetService', function($http) {
  const baseUrl = 'http://localhost:3000/api/sweets';

  this.getAllSweets = () => $http.get(baseUrl);
  this.addSweet = (sweet) => $http.post(baseUrl, sweet);
  this.updateSweet = (sweet) => $http.put(baseUrl + '/' + sweet.id, sweet);
  this.deleteSweet = (id) => $http.delete(baseUrl + '/' + id);
});
