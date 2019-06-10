function takeFullScreen() {
    var newwidth = $(window).width();
    var newheight = $(window).height();      
    $(".top-content").height(newheight).width(newwidth);
}

$('.top-content').backstretch("vb_cover.jpg");
$(window).resize(function(){
    takeFullScreen();
});
takeFullScreen();
