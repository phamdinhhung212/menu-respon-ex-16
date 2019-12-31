$(document).ready(function() {
    $("#icon-menu").click(function() {
        $("#site").toggleClass('open-respon-menu');
        $(this).toggleClass('fa-bars fa-times');
    });
    $("#content").click(function() {
        $("#site").removeClass('open-respon-menu');
        $('#icon-menu').removeClass('fa-times').addClass('fa-bars');
    })
    $(window).resize(function() {
        if( $(window).width() >= 1020 ) {
            $("#site").removeClass('open-respon-menu');
            $('#icon-menu').removeClass('fa-times').addClass('fa-bars');
        }
    });
});