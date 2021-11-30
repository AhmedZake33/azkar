$(function(){
 
    $('.main').css('paddingTop',($(window).height() / 3)-50);
    $(window).resize(function(){
             $('.main').css('paddingTop',($(window).height() / 3)-50);
    });
    $('#btn').click(function(){


   
        var mp3 = document.getElementById('mp3');
       
        mp3.src = $('#tone').val();
        mp3.play();
        setInterval(function(){
        mp3.play();
        },$('#interval').val());
        
    });
});