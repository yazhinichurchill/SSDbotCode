app.controller("unlockaccountcontroller", function($scope,$timeout) {    

     $scope.adminAction = function (actionstr){
        $timeout(function () {
            $location.path(actionstr);
        }, 0);
    };	
}); 