$(document).ready(function () {
    // for(let i=0;i<20;i++){
    //     $(".category-menu .itembox").append(`
    //         <div class="item">
    //             <img src="https://picsum.photos/id/242/1000/1000" alt="">
    //             <span>ALL</span>
    //         </div>
    //     `);
    //     $(".category-menu .itembox .item:nth-last-child(1) span").text("category"+(i+1));
    // }
    $(".category").on("wheel",".category-menu", function (event) {
        event.preventDefault(); 
        this.scrollLeft += event.originalEvent.deltaY * 2; 
    });

    $(".category").on("wheel", ".category-menu", function () {
        let current = $(this).scrollLeft();
        let maxScroll = $(this).get(0).scrollWidth - $(this).innerWidth();

        if (current > 0) {
            $(".category .button-l").addClass("active");
        } else {
            $(".category .button-l").removeClass("active");
        }

        if (current < maxScroll - 1) {
            $(".category .button-r").addClass("active");
        } else {
            $(".category .button-r").removeClass("active");
        }
    });


    $(".category").on("click", ".button-l.active", function(){
        $(".category-menu").animate({ scrollLeft: 0 }, 300);
    });
    $(".category").on("click", ".button-r.active", function(){
        let menu = $(".category-menu");
        menu.animate({ scrollLeft: menu.prop("scrollWidth") - menu.innerWidth() }, 300);
    });
});