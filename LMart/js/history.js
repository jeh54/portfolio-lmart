$(".history").on("click", ".bg, .close", function() {
    $(".history .bg").fadeOut(500);
    $(".history-box").animate({
        right: "-300px",
    }, 500);
    setTimeout(function(){
        $(".history").css("display", "none");
        $("body").css("overflow", "scroll");
    }, 500);
});
$(".history").on("click", " .button", function(){
    $(".history .itembox").append(
        `
        <a href="#">                        
            <div class="item">
                <div class="imgbox">
                    <img src="https://picsum.photos/id/22/1000/1000" alt="">
                </div>
                <div class="product-info">
                    <div class="title">
                        [농심] 너구리 5개입
                    </div>
                    <div class="price">
                        4060원
                    </div>
                </div>
            </div>
        </a>
        `
    );
});
$(".history").on("click", ".itembox a", function(){
    $(this).remove();
});