app.controller("logincontroller", function($scope,$location, $timeout) {
    var lock_account_counter = 0;
	$('body').removeClass('chatbot-active');
	$("#loginuser").val('');
    	$scope.chatbot = function(){
		$('.view-chatbot, .chat-bot-image').click(function(event){
			event.preventDefault();
			chatbotview($(this));
		});
		
		$( "body" ).delegate( ".notifcation-chatbot", "click", function(event){
			event.preventDefault();
			chatbotview($(this));
		});
		
		function chatbotview(obj){
			newPassword = "demomart2@SSD";
			if(obj.closest('.chat-bot').length > 0){
				$('body').toggleClass('chatbot-active');
			}else{
				$('body').addClass('chatbot-active');
			}
		}
	};
	$scope.loginuser = 'signin';	
	$scope.loginPage = function (event){		
		//$( "#page-wrapper" ).delegate( ".signin", "click", function(event){
			//console.log(lock_account_counter);
			//event.preventDefault();
			var username = $('#username').val();
			var password = $('#password').val();
			var alertbox = $('.alert');		
			
			alertbox.removeClass('show');
			if(!username || !password){
				alertbox.html('Please enter Username and Password field');
				alertbox.addClass('show');
				return;
			}else if(username === "s.balakrishnan31@gmail.com" || 
					username === "goldenbaski@gmail.com"  ||
					username === "suresh.tr@gmail.com"  || 
					username === "chbabu342@gmail.com" || 
					username === "vijayjustin88@gmail.com")
			{				
				
				var xhr = new XMLHttpRequest();
		        xhr.open('POST', "//demomartrestapis.azurewebsites.net/api/getUserInfo", true);
		        xhr.setRequestHeader('Content-Type', 'application/json');
		        xhr.send(JSON.stringify({'enterpriseid':username}));             
		        xhr.addEventListener("readystatechange", processRequest, false);            
		        function processRequest(e) {
		        	if (xhr.readyState == 4 && xhr.status == 200) {	               
		                //alert(JSON.parse(xhr.responseText));
						//newPassword = JSON.parse(xhr.responseText).password;
						if((username === "s.balakrishnan31@gmail.com" || 
							username === "goldenbaski@gmail.com"  ||
							username === "suresh.tr@gmail.com"  || 
							username === "chbabu342@gmail.com" || 
							username === "vijayjustin88@gmail.com") && 
							(password === "demomart2@SSD" || "demomart2@SSD" === newPassword || password == 'ltadiYHH'))
						{						
							lock_account_counter = 0;
							$("#loginuser").val(username); 
							//window.location.href = "main.html#"+username;
							//$location.path("main");
							$timeout(function () {
								$location.path("main");
							}, 0);
						}else if(lock_account_counter >= 3){
							alertbox.html('<a href="#" class="notifcation-chatbot">Your account is locked. Please click the Chatbot to unlock the account.</a>');
							alertbox.addClass('show');	
						}else{
							lock_account_counter ++;
							alertbox.html('<a href="#" class="notifcation-chatbot">Invalid Password. Please click the Chatbot to reset the password</a>');
							alertbox.addClass('show');	
						}					
		            }
		        }
				
			}
			else if(username === "admin@demart.com" && password === "admin2@demart"){
				lock_account_counter = 0;
				//window.location.href = "admin.html";
				$("#loginuser").val(username); 
				$timeout(function () {
								$location.path("admin");
							}, 0);
            }
			else{
				if(lock_account_counter >= 3)
					alertbox.html('<a href="#" class="notifcation-chatbot">Your account is locked. Please click the Chatbot to unlock the account.</a>');
				else{
					lock_account_counter ++;
					alertbox.html('<a href="#" class="notifcation-chatbot">Invalid Username and Password. Please click the Chatbot to reset the password</a>');
				}
				alertbox.addClass('show');
			}
			if (username !== "admin@demomart.com"){
				recentLoginUserId = username;
			}
	};
	
}); 