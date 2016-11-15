angular.module('userProfiles').controller('MainController', function($scope, mainService){
    
    $scope.getUsers = mainService.getUsers;

    $scope.users = $scope.getUsers();

    $scope.toggleFavorite = mainService.toggleFavorite;
   
})