$(document).ready(function($){
    $('.band').animate({opacity: 1}, 700, function(e){
        $(this).find('.logo').css("margin-top", "0");
        $(this).find('.logo').animate({opacity: 1}, 700);
    });
});