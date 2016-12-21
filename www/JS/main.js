$(document).ready(function(){
    //mobile navigation toggle button
    $(".toggle").click(function(){
    	var navHeight = $("header nav").height();
    	if(navHeight <= 50)
    	{
    		$("header nav").animate({ 'height': '401' }, 400);
    	} else {
            $("header nav").animate({ 'height': '50' }, 400);
        }
    });

    //on mobile navigation close menu
    $(".primary").click(function(){
    	$('.mobnav').animate({ 'height': '0' }, 400);
    });

    //lightbox
    $(".single_image").fancybox();

    //page navigation scroll
    if(window.location.href.indexOf("#contact") > -1) {
        divid = "#contact";
    } else if(window.location.href.indexOf("#about") > -1) {
        divid = "#about";
    } else if(window.location.href.indexOf("#welcome") > -1) {
        divid = "#welcome";
    } else if(window.location.href.indexOf("#portfolio") > -1) {
        divid = "#portfolio";
    };
    to_position(divid);
});

function to_position(divid){
    $('html, body').animate({scrollTop:$(divid).position().top - 70 }, 'slow');
};

function page_position(divid){
    window.location.href = 'index.html' + divid;
};