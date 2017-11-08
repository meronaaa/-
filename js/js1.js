// JavaScript source code

        $(document).ready(function() {
            $(window).scroll(function () {
                // vLocate는 윈도우 객체의 수직 위치를 픽셀로 측정함.
                // fixedLocate는 고정해야될 위치. 내비게이션 바의 이전prev 요소의 높이를 측정.
                var vLocate = $(this).scrollTop();
                var fixedLocate = $('#nav').prev().height();

                if (vLocate > fixedLocate) {
                    $('#nav').css({ position: 'fixed', top: '0' });
                } else {
                    $('#nav').css({ position: 'absolute', top: fixedLocate+'px' });
                };
            });
        });

// 인덱스 페이지 픽 스크립트----------------------------------
	$(function(){
        $('.pic1').mouseenter(function () {
            $('.pic-text1').animate({ height: '420px', width: '250px', left: '15px', bottom: '100px' }, 700);
            $('.pic-on1').fadeIn(1000);
			$('.pic-text1 h2').css('color', '#e90008');
        });
        $('.pic1').mouseleave(function () {
            $('.pic-text1').animate({ height: '249px', width: '280px', left: '0px', bottom: '-143px' }, 700);
            $('.pic-on1').fadeOut(1000);
			$('.pic-text1 h2').css('color', '#b3b1b2');
        });
		
		$('.pic2').mouseenter(function () {
            $('.pic-text2').animate({ height: '250px', width: '250px', left: '15px', bottom: '14px' }, 700);
            $('.pic-on2').fadeIn(1000);
			$('.pic-text2 h2').css('color', '#e90008');
        });
        $('.pic2').mouseleave(function () {
            $('.pic-text2').animate({ height: '249px', width: '280px', left: '0px', bottom: '-142px' }, 700);
            $('.pic-on2').fadeOut(1000);
			$('.pic-text2 h2').css('color', '#b3b1b2');
        });
		
		$('.pic3').mouseenter(function () {
            $('.pic-text3').animate({ height: '195px', width: '490px', left: '35px', bottom: '40px' }, 700);
            $('.pic-on3').fadeIn(1000);
			$('.pic-text3 h2').css('color', '#e90008');
        });
        $('.pic3').mouseleave(function () {
            $('.pic-text3').animate({ height: '260px', width: '560px', left: '0px', bottom: '-190px' }, 700);
            $('.pic-on3').fadeOut(1000);
			$('.pic-text3 h2').css('color', '#b3b1b2');
        });
		
		$('.pic4').mouseenter(function () {
            $('.pic-text4').animate({ height: '195px', width: '490px', left: '35px', bottom: '40px' }, 700);
            $('.pic-on4').fadeIn(1000);
			$('.pic-text4 h2').css('color', '#e90008');
        });
        $('.pic4').mouseleave(function () {
            $('.pic-text4').animate({ height: '260px', width: '560px', left: '0px', bottom: '-170px' }, 700);
            $('.pic-on4').fadeOut(1000);
			$('.pic-text4 h2').css('color', '#b3b1b2');
        });
		
		$('.pic5').mouseenter(function () {
            $('.pic-text5').animate({ height: '420px', width: '250px', left: '15px', bottom: '85px' }, 700);
            $('.pic-on5').fadeIn(1000);
			$('.pic-text5 h2').css('color', '#e90008');
        });
        $('.pic5').mouseleave(function () {
            $('.pic-text5').animate({ height: '249px', width: '280px', left: '0px', bottom: '-157px' }, 700);
            $('.pic-on5').fadeOut(1000);
			$('.pic-text5 h2').css('color', '#b3b1b2');
        });
		
		$('.pic6').mouseenter(function () {
            $('.pic-text6').animate({ height: '240px', width: '250px', left: '15px', bottom: '19px' }, 700);
            $('.pic-on6').fadeIn(1000);
			$('.pic-text6 h2').css('color', '#e90008');
        });
        $('.pic6').mouseleave(function () {
            $('.pic-text6').animate({ height: '249px', width: '280px', left: '0px', bottom: '-155px' }, 700);
            $('.pic-on6').fadeOut(1000);
			$('.pic-text6 h2').css('color', '#b3b1b2');
        });
		
		$('.pic7').mouseenter(function () {
            $('.pic-text7').animate({ height: '215px', width: '490px', left: '35px', bottom: '32px' }, 700);
            $('.pic-on7').fadeIn(1000);
			$('.pic-text7 h2').css('color', '#e90008');
        });
        $('.pic7').mouseleave(function () {
            $('.pic-text7').animate({ height: '260px', width: '560px', left: '0px', bottom: '-163px' }, 700);
            $('.pic-on7').fadeOut(1000);
			$('.pic-text7 h2').css('color', '#b3b1b2');
        });
    });


//픽토그램
    
$(function(){
    var pictoList = $('.slider-pictogram').find('li');
    for(var i=0; i < pictoList.length; i++) {
        pictoList.find('img').eq(i).attr('src', 'img/sns'+i+'.png');
    }
    $('.slider-pictogram').find('li').hover(
        function() {
            var pictoIndex = $(this).index();
            $(this).find('img').attr('src', 'img/sns'+pictoIndex+'_toggle.png');
            //alert(pictoIndex);
        }, function() {
            var pictoIndex = $(this).index();
            $(this).find('img').attr('src', 'img/sns'+pictoIndex+'.png');
        }
    );
    /*//facebook
    $('.facebook').hover(function(){
        $('.facebook').attr('src','img/sns_facebook2.png');
    },function(){
        $('.facebook').attr('src','img/sns_facebook.png');
    });
    
    //insta
    $('.insta').hover(function(){
        $('.insta').attr('src','img/sns_insta2.png');
    },function(){
        $('.insta').attr('src','img/sns_insta.png');
    });
    
    //twitter
    $('.twitter').hover(function(){
        $('.twitter').attr('src','img/sns_twitter2.png');
    },function(){
        $('.twitter').attr('src','img/sns_twitter.png');
    });
    
    
    //youtube
    $('.youtube').hover(function(){
        $('.youtube').attr('src','img/sns_youtube2.png');
    },function(){
        $('.youtube').attr('src','img/sns_youtube.png');
    });
    
    
    //contactUs
    $('.contactUs').hover(function(){
        $('.contactUs').attr('src','img/sns_contactUs2.png');
    },function(){
        $('.contactUs').attr('src','img/sns_contactUs.png');
    });*/
});