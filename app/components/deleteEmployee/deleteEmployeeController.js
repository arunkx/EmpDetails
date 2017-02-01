app.controller("deleteEmployeeController", function ($scope, $http,$location) {
    $scope.DeleteEmployee = function () {
        $http.get('http://localhost:53232/api/Employees')
            .then(function (rspns) {
                $scope.emplys = rspns.data;
                var empflag = false;
                
                angular.forEach($scope.emplys, function (value, key) {

                    if (value.EmpId == $scope.employeeDelete) {
                        empflag = true;
                     $http.delete('http://localhost:53232/api/Employees/' + $scope.employeeDelete)
                        .then(function successCallback(response) {
                            alert("Employee with id " + $scope.employeeDelete + " is deleted successfully!");
                        },
                        function errorCallback(response) {
                            $location.path('/error');
                            console.log(response.status);
                        }
                        )
                    }

                    
                })
                if (empflag == false) {
                  
                    $scope.message = "Employee with id "+$scope.employeeDelete+" does not exist !"
                }
                else {

                    $scope.message = '';
                }

            })
            
    }
})