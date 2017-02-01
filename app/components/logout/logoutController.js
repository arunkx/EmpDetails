app.controller("logoutController", function ($scope, $http, $rootScope,$location) {
    $rootScope.loginFlag = false;
    $scope.byeimage={
        background:'url(assets/images/bye.png)'
    }
});