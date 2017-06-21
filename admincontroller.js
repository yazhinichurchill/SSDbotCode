app.controller("admincontroller", function($scope, $location, $timeout) {
    

    $scope.adminAction = function (actionstr){
        $timeout(function () {
            $location.path(actionstr);
        }, 0);
    };

    	
}); 