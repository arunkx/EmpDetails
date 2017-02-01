app.controller("editEmployeeController", function ($scope, $http) {

    $scope.editEmployeeId = '';
    $scope.flag = false;
    $scope.message = '';


    $scope.departs = '';

    $http.get('http://localhost:53232/api/Departments')
        .then(function (response) {
            $scope.departs = response.data;
        })

    $scope.GetEmployeetoEdit = function () {

        $http.get('http://localhost:53232/api/Employees')
            .then(function (rspns) {
                $scope.emplys = rspns.data;
                var empflag = false;
                angular.forEach($scope.emplys, function (value, key) {

                    if (value.EmpId == $scope.editEmployeeId) {
                        empflag = true;

                        $http.get('http://localhost:53232/api/Employees/' + $scope.editEmployeeId)
                            .then(function successCallback(response) {


                                $scope.employee = response.data;
                                $scope.name = $scope.employee.EmpName;
                                $scope.address = $scope.employee.EmpAddress;
                                $scope.gender = $scope.employee.EmpGender;
                                $scope.salary = $scope.employee.EmpSalary;
                                $scope.department = $scope.employee.DeptId;
                                $scope.flag = true;

                            },function errorCallback(response)
                            {
                                $location.path('/error');
                            console.log(response.status);
                            })

                    }
                })

                if (empflag == false) {
                    $scope.flag = false;
                    $scope.message = "Employee with id "+$scope.editEmployeeId+" does not exist !";
                }
                else {

                    $scope.message = '';
                }

            }
            
            );






    };

    $scope.UpdateEmployee = function () {
        var EmployeeEdit = {
            EmpName: $scope.name,
            EmpAddress: $scope.address,
            EmpGender: $scope.gender,
            EmpSalary: $scope.salary,
            DeptId: $scope.department

        }

        $http.put('http://localhost:53232/api/Employees/' + $scope.editEmployeeId, EmployeeEdit)
            .then(function (response) {
                alert("Employee details updated successfully");
            },
            
            function errorCallback(response)
                            {
                                $location.path('/error');
                            console.log(response.status);
                            })
    }
});