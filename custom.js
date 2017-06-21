var $ = jQuery;
var lock_account_counter = 0;
var newPassword = "";	
var utilities = function(){
	
	var chatbot = function(){
		// $( "#page-wrapper" ).delegate( ".view-chatbot, .chat-bot-image", "click", function(event){
		// 	event.preventDefault();
		// 	chatbotview($(this));
		// });
		
		// $( "#page-wrapper" ).delegate( ".notifcation-chatbot", "click", function(event){
		// 	event.preventDefault();
		// 	chatbotview($(this));
		// });
		
		// function chatbotview(obj){
		// 	newPassword = "demomart2@SSD";
		// 	if(obj.closest('.chat-bot').length > 0){
		// 		$('body').toggleClass('chatbot-active');
		// 	}else{
		// 		$('body').addClass('chatbot-active');
		// 	}
		// }
	};
	var recentLoginUserId = "";
	var eventtrigger = function(event){
		// $( "#page-wrapper" ).delegate( ".signin", "click", function(event){
			
		// 	event.preventDefault();
		// 	var username = $('#username').val();
		// 	var password = $('#password').val();
		// 	var alertbox = $('.alert');
			
			
			
		// 	alertbox.removeClass('show');
		// 	if(!username || !password){
		// 		alertbox.html('Please enter Username and Password field');
		// 		alertbox.addClass('show');
		// 		return;
		// 	}else if(username === "s.balakrishnan31@gmail.com" || 
		// 			username === "goldenbaski@gmail.com"  ||
		// 			username === "suresh.tr@gmail.com"  || 
		// 			username === "chbabu342@gmail.com" || 
		// 			username === "vijayjustin88@gmail.com")
		// 	{				
				
		// 		var xhr = new XMLHttpRequest();
		//         xhr.open('POST', "//demomartrestapis.azurewebsites.net/api/getUserInfo", true);
		//         xhr.setRequestHeader('Content-Type', 'application/json');
		//         xhr.send(JSON.stringify({'enterpriseid':username}));             
		//         xhr.addEventListener("readystatechange", processRequest, false);            
		//         function processRequest(e) {
		//         	if (xhr.readyState == 4 && xhr.status == 200) {	               
		//                 //alert(JSON.parse(xhr.responseText));
		// 				//newPassword = JSON.parse(xhr.responseText).password;
		// 				if((username === "s.balakrishnan31@gmail.com" || 
		// 					username === "goldenbaski@gmail.com"  ||
		// 					username === "suresh.tr@gmail.com"  || 
		// 					username === "chbabu342@gmail.com" || 
		// 					username === "vijayjustin88@gmail.com") && 
		// 					(password === "demomart2@SSD" || "demomart2@SSD" === newPassword || password == 'f8DM0D9b'))
		// 				{						
		// 					lock_account_counter = 0;
		// 					window.location.href = "main.html#"+username;
		// 				}else if(lock_account_counter >= 3)
		// 					alertbox.html('<a href="#" class="notifcation-chatbot">Your account is locked. Please click the Chatbot to unlock the account.</a>');
		// 				else{
		// 					lock_account_counter ++;
		// 					alertbox.html('<a href="#" class="notifcation-chatbot">Invalid Password. Please click the Chatbot to reset the password</a>');
		// 				}
		// 				alertbox.addClass('show');						
		//             }
		//         }
				
		// 		// lock_account_counter = 0;
		// 		// window.location.href = "main.html#"+username;
		// 	}
		// 	else if(username === "admin@demart.com" && password === "admin2@demart"){
		// 		lock_account_counter = 0;
		// 		window.location.href = "admin.html";
        //     }
		// 	else{
		// 		if(lock_account_counter >= 3)
		// 			alertbox.html('<a href="#" class="notifcation-chatbot">Your account is locked. Please click the Chatbot to unlock the account.</a>');
		// 		else{
		// 			lock_account_counter ++;
		// 			alertbox.html('<a href="#" class="notifcation-chatbot">Invalid Username and Password. Please click the Chatbot to reset the password</a>');
		// 		}
		// 		alertbox.addClass('show');
		// 	}
		// 	if (username !== "admin@demomart.com"){
		// 		recentLoginUserId = username;
		// 	}
		// });	
		
		// $( "#page-wrapper" ).delegate( "#generatepassword", "click", function(event){
		// 	event.preventDefault();
		// 	var newPwd = 'f8DM0D9b'; //generatePassword(8, false, /[\w\d\?\-]/);
			
		// 	$('#password').val(newPwd);
		// 	var _email = $('#email_admin_page').val();
			
		// 	var xhr = new XMLHttpRequest();
	    //     xhr.open('POST', "//demomartrestapis.azurewebsites.net/api/updatePassword", true);
	    //     xhr.setRequestHeader('Content-Type', 'application/json');
	    //     xhr.send(JSON.stringify({password:newPwd,email:_email}));             
	    //     xhr.addEventListener("readystatechange", processRequest, false);            
	    //     function processRequest(e) {
	    //         if (xhr.readyState == 4 && xhr.status == 200) {	               
	    //            console.log(xhr.responseText);
	    //         }
	    //     }
		
		// });
		$( "#page-wrapper" ).delegate( ".passwordcontainer span", "click", function(event){
			$('.passwordcontainer').toggleClass('active');
			if($('.passwordcontainer').hasClass('active'))
				$('#password').attr({'type':'text'});
			else
				$('#password').attr({'type':'password'});
		});
		
		//setting username for userAgent
		var type = window.location.hash.substr(1);
		$('.mainpage .signin > a').html('Hello '+type);
	}
	
	//ready function
	var init = function(){
		chatbot();
		
		// $.ajax({
		// 	    url : "//demomartrestapis.azurewebsites.net/api/getUserInfo",
		// 	    type: "POST",
		// 	    data : {email:"goldenbaski@gmail.com"},
		// 	    success: function(data, textStatus, jqXHR)
		// 	    {
		// 	        console.log('data: '+data.data+' textStatus: '+ textStatus+' jqXHR: '+ jqXHR);
		// 	    },
		// 	    error: function (jqXHR, textStatus, errorThrown)
		// 	    {
		// 	 		console.log('jqXHR: '+jqXHR+' textStatus: '+ textStatus+' jqXerrorThrownHR: '+ errorThrown);
		// 	    }
		// 	});
			

		// $.post( "//demomartrestapis.azurewebsites.net/api/addUserInfo", {email:"goldenbaski@gmail.com"})
		//   .done(function( data ) {	
		// 	  console.log(data);	
		//     alert( "Data Loaded: " + data );		
		//   });


		// var xhr = new XMLHttpRequest();
        // xhr.open('POST', "//mongodbrestapi.azurewebsites.net/api/addUserInfo", true);
        // xhr.setRequestHeader('Content-Type', 'application/json')
        // xhr.send(JSON.stringify({userEmail:"baskaran.varadarajan"}));             
        // xhr.addEventListener("readystatechange", processRequest, false);            
        // function processRequest(e) {
        //     if (xhr.readyState == 4 && xhr.status == 200) {
        //        // var response = JSON.parse(xhr.responseText);
        //         alert(xhr.responseText);
        //     }
        // }
	}
	
	//load function
	var loadinit = function(){
		
	}
	
	$(window).load(function(){
		loadinit();
		//eventtrigger();
	});
	
	$('document').ready(function(){
		init();
	});

	return {

	}

}();
