app.controller("signupController", function ($scope, $http, $location) {
    $scope.usertaken = '';
    $scope.emailtaken ='';
    $scope.AddUser = function () {
        $http.get('http://localhost:53232/api/Users')
            .then(function (response) {
                $scope.users = response.data;
                var signflag = false;
                angular.forEach($scope.users, function (value, key) {
                    if (value.UserName == $scope.username) {
                        signflag = true;
                        $scope.usertaken = "*Username already taken. Please choose other !";

                    }
                    if (value.Email.toLowerCase() == $scope.email.toLowerCase()) {
                        signflag = true;
                        $scope.emailtaken = "*Email already registered. Please choose other !";

                    }
                })
                if (signflag == false) {
                    var user = {
                        Name: $scope.name,
                        Email: $scope.email,
                        UserName: $scope.username,
                        Password: $scope.password
                    }



                    $http.post('http://localhost:53232/api/Users', user)
                        .then(function (response) {


                            alert("Sign up successfull. Please login !");
                            $location.path('/login');

                        })

                }
            })



    }
})
