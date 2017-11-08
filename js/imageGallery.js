
$(document).ready(function () {

    // 이미지 리스트 앞뒤로 양 끝 이미지 추가
    $('.imageList img:last-child').clone().prependTo('.imageList');
    $('.imageList img:nth-child(2)').clone().appendTo('.imageList');

    // 이미지리스트에서 img개체를 뽑아서, 각 이미지의 개수와 이미지 사이즈를 변수에 등록.
    var img = $('.imageList').children('img');
    var listCount = img.length; // 앞 뒤로 추가해서 현재 5개
    var imgWidth = img.width();  // 이미지 가로길이는 1280px
    var imgHeight = img.height(); // 이미지 세로길이는 630px

    // 이미지 디스플레이 크기와 위치 지정
    $('.imageDisplay').css({
        width: imgWidth + 'px',
        height: imgHeight + 'px',
        marginLeft: -imgWidth/2 + 'px',
        marginTop: -imgHeight/2 + 'px'
    });
    
    // 이미지 리스트 가로 길이 지정
    $('.imageList').css({width: imgWidth * listCount + 'px', left: -imgWidth + 'px'});
    
    // 버튼 위치 지정
    $('.leftButton').css({right: (imgWidth/2+40)+'px'});
    $('.rightButton').css({left: (imgWidth/2+40)+'px'});
    $('.closeButton').css({left: (imgWidth/2-50)+'px', bottom: (imgHeight/2+10)+'px'});
    // 썸네일을 클릭하면 클릭한 위치값으로 imageList 내의 이미지 위치를 계산한다.
    $('.mvimgs').children('div').click(function (event) {
        var imageIndex = $(this).index();
        img.css('left', -imageIndex*imgWidth+'px')
        $('.blackBox').fadeIn();
    });

    // 오른쪽 버튼을 클릭하면 오른쪽으로 이미지가 넘어간다.
    $('.rightButton').click(function (event) {
        // 그 img의 css.left 위치 값을 left라는 변수에 등록.
        var left = img.css('left');
        // 클릭하면 기존의 애니메이션은 중지되고, 새 애니메이션이 실행됨. 해당 개체의 css.left 속성이 -640px줄어서 새로 입력됨. 만약 -1920px에서 애니메이션이 실행된다면 애니메이션 종료 후 css.left속성이 0px(시작위치)로 바뀐다.
        img.stop();
        img.animate({ left: '-=' + imgWidth+ 'px' }, 500, function () {
            if (left == -imgWidth * (listCount-3) + 'px') {
                $(this).css('left', '0px');
            }
        });
    });

    $('.leftButton').click(function (event) {
        var left = img.css('left');
        img.stop();
        img.animate({ left: '+='+ imgWidth +'px' }, 500, function () {
            if (left == '0px') {
                $(this).css('left', -imgWidth * (listCount-3)+'px')
            }
        });
    });

    $('.closeButton').click(function (event) {
        $('.blackBox').fadeOut();
    });
});
