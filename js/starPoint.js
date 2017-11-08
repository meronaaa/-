$(document).ready(function () {
        var score = parseFloat($('.starpoint').text());
        var scoreInt = parseInt(score);
        var scoreFloat = score - scoreInt;
        var starImg = '<img src="img/eachStar.png" />';

        if (scoreFloat > 0) {
            $('.starpoint').prepend('<div class="float">'+starImg+'</div>');
        }
        for (i = 0; i < scoreInt; i++) {
            $('.starpoint').prepend(starImg);
        }
        $('.float').css({width: 53*scoreFloat + 'px'});
    });