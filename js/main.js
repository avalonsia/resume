$(function(){
	$('.nametitle').click(function(){
		$('html,body').animate({scrollTop:$('#header').offset().top}, 800);
		return false;
	});
	$('#home').click(function(){
		$('html,body').animate({scrollTop:$('#header').offset().top}, 800);
		return false;
	});
	$('#resume').click(function(){
		$('html,body').animate({scrollTop:$('#secondcontainer').offset().top}, 800);
		return false;
	});
	$('#education').click(function(){
		$('html,body').animate({scrollTop:$('#thirdcontainer').offset().top}, 800);
		return false;
	});
	$('#skills').click(function(){
		$('html,body').animate({scrollTop:$('#fourthcontainer').offset().top}, 800);
		return false;
	});
	$('#contact').click(function(){
		$('html,body').animate({scrollTop:$('#fifthcontainer').offset().top}, 800);
		return false;
	});
});