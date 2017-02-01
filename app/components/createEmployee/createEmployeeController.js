app.controller("createEmployeeController", function ($scope, $http, $rootScope) {



    $http.get('http://localhost:53232/api/Departments')
        .then(function successCallback(response) {
            $scope.departments = response.data;
        }, function errorCallback(response) {
            $location.path('/error');
            console.log(response.status);
        }
        );




    $scope.Add = function () {
        var employee =
            {
                EmpName: $scope.empName,
                EmpAddress: $scope.empAddress,
                EmpGender: $scope.empGender,
                EmpSalary: $scope.empSalary,
                DeptId: parseInt($scope.depart),
                AddedBy: $rootScope.username

            };
        $http.post('http://localhost:53232/api/Employees', employee)
            .then(function (response) {
                alert('Employee added successfully !');
                $scope.empName = '';
                $scope.empAddress = '';
                $scope.empGender = '';
                $scope.empSalary = '';
                $scope.depart = '';
            });
    }

});