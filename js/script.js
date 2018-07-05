$(function(){
	// scroll menu
	$('.scroll').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - 10
		}, 500);
		return false;
	});
	// scroll menu end

	// input-effect
	if($(".input-effect").val() != ""){
		$(".input-effect").addClass("has-content");
	}else{
		$(".input-effect").removeClass("has-content");
	}

	$(".input-effect").focusout(function(){
		if($(this).val() != ""){
			$(this).addClass("has-content");
		}else{
			$(this).removeClass("has-content");
		}
	})
	// input-effect end
});