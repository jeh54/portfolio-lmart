$(window).resize(function(){
    let w = $(window).width();
    if(w <= 800){
        $("footer .menu-sitemap .searchbox").css("width", "100px");
        $("footer .menu-sitemap .searchbox input").focus(function() {
            $("footer .menu-sitemap .searchbox").css("width", "400px");
        });
        
        $("footer .menu-sitemap .searchbox input").blur(function() {
            $("footer .menu-sitemap .searchbox").css("width", "100px");
        });
    }
    else{
        $("footer .menu-sitemap .searchbox").css("width", "500px");
        $("footer .menu-sitemap .searchbox input").off("focus blur");
    }
});