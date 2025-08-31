$("body").append(`
    <div class="goto-top">
        <div class="recent-visited">
            <i class="fa-solid fa-eye"></i>
        </div>
        <div class="top">
            <i class="fa-regular fa-circle-up"></i>
        </div>
    </div>
`);
$(".top").click(function(){
    $(window).scrollTop(0);
});
$(".recent-visited").click(function(){
    $("body").css("overflow", "hidden");
    $(".history").css("display", "block");
    $(".history .bg").fadeIn(500);
    $(".history-box").animate({
        right: "0px",
    }, 500);
});