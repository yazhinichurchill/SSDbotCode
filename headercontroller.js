app.controller("headercontroller", function($scope) {
    var userloginname = $("#loginuser").val(); 
    if (userloginname) {
         $scope.loginuser = userloginname;
         $scope.signText = "SignOut";
    }else{
        $scope.loginuser = 'User';
        $scope.signText = "SignIn";
    }
    	

    $scope.signout = function (){
        $("#loginuser").val(null);
    };

    
}); 