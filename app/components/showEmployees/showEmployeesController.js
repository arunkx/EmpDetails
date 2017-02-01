app.controller("showEmployeesController", function ($scope, $http,$location,$timeout) {

    $timeout(function() {
      $location.path('/error');
      }, 3000);

    $http.get('http://localhost:53232/api/Employees')
        .then(function (response) {
            $scope.employees = response.data;
            

            angular.forEach($scope.employees, function (value, key) {
                var empdep = value.DeptId;
                $http.get('http://localhost:53232/api/Departments/' + empdep)
                    .then(function (response) {
                        var depar = response.data;
                        value.DeptId = depar.DeptName;
                    },function errorCallback(response)
                            {
                                $location.path('/error');
                            console.log(response.status);
                            }
                    
                    )
            })


        });

});

