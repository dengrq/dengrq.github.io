$(document).ready(function(){
	$(window).scroll(function(){
		var scrolltop=$(document).scrollTop();
		/*console.log(scrolltop);*/
		if(scrolltop>350){
			$('.first').animate({
				"top":0,
				"left":200,
				"opacity":1
			},1000)
		}
			

	})
	
	
})