$(document).ready(function(){
    if(window.innerWidth < 768){
        $('.btn-lg').removeClass("btn-lg");
        $('#myNavbar .bg-opacity-25').removeClass("bg-opacity-25");
    }

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});