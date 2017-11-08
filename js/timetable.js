$(document).ready(function(){
        var test = $('.timetable').children('dd');
        var detailWidth = $('.detailWrapper').width();
        $('.detailList').css({width: test.length*detailWidth + 'px'});
        for (var i = 0; i < test.length; i++) {
            $('.detailList').find('img').eq(i).attr('src', 'img/calendar/movie_image (' + i + ').jpg');
        }

        test.click(function(){
            var nIndex = $(this).index('dd');
            $('.detailWrapper').css({left: '-' + nIndex*detailWidth + 'px'});
        });
    });