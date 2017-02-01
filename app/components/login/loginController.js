app.controller("loginController", function ($scope, $http, $rootScope, $location) {
    $rootScope.loginFlag = false;
    $rootScope.username='';

    $scope.Reset = function () {
        $scope.username = '';
        $scope.password = '';
        $scope.message = '';
    };


    $scope.Submit = function () {
        $http.get('http://localhost:53232/api/Users')
            .then(function successCallback(response) {
                $scope.empList = response.data;
                var flg = false;
                angular.forEach($scope.empList, function (value, key) {
                    if (value.UserName.toLowerCase() == $scope.username.toLowerCase() && value.Password == $scope.password) {
                        $rootScope.loginFlag = true;
                        flg = true;
                        $rootScope.username=$scope.username;
                        $location.path('/home');


                    }

                })

                if (flg == false) {
                    $scope.message = "Invalid user. Please check the credentials !"
                }
                else {
                    $scope.message = '';
                }
            },
              function errorCallback(response,status) {
                            $location.path('/error');
                            console.log(response.status);
                        })

    }

});