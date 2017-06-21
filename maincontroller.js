app.controller("maincontroller", function($scope) {
    
    	 $scope.adminAction = function (actionstr){
        $timeout(function () {
            $location.path(actionstr);
        }, 0);
    };
}); 