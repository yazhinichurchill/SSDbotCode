app.controller("resetpasswordcontroller", function($scope,$timeout) {    
    	
         $scope.adminAction = function (actionstr){
        $timeout(function () {
            $location.path(actionstr);
        }, 0);
    };

    $scope.generatepwd = function (){
        $scope.newpwd = 'f8DM0D9b'; //generatePassword(8, false, /[\w\d\?\-]/);
        
        //$('#password').val(newPwd);
        var _email = $('#email_admin_page').val();
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "//demomartrestapis.azurewebsites.net/api/updatePassword", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({password:$scope.newpwd,email:_email}));             
        xhr.addEventListener("readystatechange", processRequest, false);            
        function processRequest(e) {
            if (xhr.readyState == 4 && xhr.status == 200) {	               
                console.log(xhr.responseText);
            }
        }
    };

    $scope.saveBtn = function (){
        
    };
}); 