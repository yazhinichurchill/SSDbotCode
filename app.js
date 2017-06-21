var app = angular.module("dmartApp", ["ngRoute"]);
 app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/View/loginview.html",
        controller  : 'logincontroller'
    })
    .when("/admin", {
        templateUrl : "/View/adminview.html",
        controller: 'admincontroller'
    })
    .when("/main", {
        templateUrl : "/View/mainview.html",
        controller: 'maincontroller'
     })
     .when("/resetpassword", {
        templateUrl : "/View/resetpasswordview.html",
        controller: 'resetpasswordcontroller'
     })
     .when("/unlockaccount", {
        templateUrl : "/View/unlockaccountview.html",        
        controller: 'resetpasswordcontroller'
     })
     .when("/editprofile", {
        templateUrl : "/View/profileview.html"
     });
});
