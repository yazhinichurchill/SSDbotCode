app.controller("footercontroller", function($scope, $location) {    
    	$scope.showSSD = true;

        $( "#page-wrapper" ).delegate( ".view-chatbot", "click", function(event){
			event.preventDefault();
			$scope.showSSD = false;
			chatbotview($(this));
		});
		
		$( "#page-wrapper" ).delegate( ".notifcation-chatbot", "click", function(event){
			event.preventDefault();
			$scope.showSSD = true;
			chatbotview($(this));
		});
		
		$scope.chatbot = function(event){
			var url = $location.url();
			if(url=="/main")
				$scope.showSSD = false;
			else
				$scope.showSSD = true;
			chatbotview($(event.target));
		}
		
        function chatbotview(obj){
			if(obj.closest('.chat-bot').length > 0){
				$('body').toggleClass('chatbot-active');
			}else{
				$('body').addClass('chatbot-active');
			}
		}
}); 