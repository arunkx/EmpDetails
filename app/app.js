var app = angular.module("myModule", ["ngRoute","ngValidateModule"])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

        $routeProvider
            .when("/home",
            {
                templateUrl: "components/home/home.html",
                controller: "homeController"
            }
            )
            .when("/showEmployees",
            {
                templateUrl: "components/showEmployees/showEmployees.html",
                controller: "showEmployeesController"
            }
            )
            .when("/createEmployee",
            {
                templateUrl: "components/createEmployee/createEmployee.html",
                controller: "createEmployeeController"
            }
            )
            .when("/editEmployee",
            {
                templateUrl: "components/editEmployee/editEmployee.html",
                controller: "editEmployeeController"
            }
            )
            .when("/deleteEmployee",
            {
                templateUrl: "components/deleteEmployee/deleteEmployee.html",
                controller: "deleteEmployeeController"
            }
            )
            .when("/login",
            {
                templateUrl: "components/login/login.html",
                controller: "loginController"
            }
            )
            .when("/logout",
            {
                templateUrl: "components/logout/logout.html",
                controller: "logoutController"
            }
            )
            .when("/about",
            {
                templateUrl: "components/about/about.html",
                controller: "aboutController"
            }
            )
            .when("/contactus",
            {
                templateUrl: "components/contactus/contactus.html",
                controller: "contactusController"
            }
            )
            .when("/signup",
            {
                templateUrl: "components/signup/signup.html",
                controller: "signupController"
            }
            )
            .when("/error",
            {
                templateUrl: "components/error/error.html"
              
            }
            )
            .otherwise({ redirectTo: "/home" });
        $locationProvider.html5Mode(true);


    }])
    
    // ngValidateFactory.strategies.demoValidationStrategy=[
    //     {
    //         value:ngValidateFactory.required,message:"This field is required"
    //     },
    //     {
    //         value:[ngValidateFactory.minLength,8], message:"This field is required"
    //     }
    // ]
    ;
