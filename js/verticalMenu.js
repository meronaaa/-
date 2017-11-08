$(function(){
	$('.toggle').click(function(){
		$('.menu').toggleClass('active');
		$('.overlay').fadeToggle(400);
	});
    $('.overlay').click(function () {
        $('.menu').removeClass('active');
        $(this).fadeOut(400);
    });
});