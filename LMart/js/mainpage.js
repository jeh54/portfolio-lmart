$(document).ready(function(){
    let swiper = new Swiper(".item-preview", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
        },
    });
    let event_swiper = new Swiper(".event-item", {
        slidesPerView: 3,
        loop: true,
        navigation: {
            nextEl: ".swiper-custom-next",
            prevEl: ".swiper-custom-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });
    $(window).resize(function(){
        let w = $(window).width();
        if(w > 1500){
            swiper.params.slidesPerView = 3;
            event_swiper.params.slidesPerView = 3;
        }
        else if(w <= 800){
            swiper.params.slidesPerView = 1;
            event_swiper.params.slidesPerView = 1;
        }
        else{
            swiper.params.slidesPerView = 2;
            event_swiper.params.slidesPerView = 2;
        }
        swiper.update();
        event_swiper.update();
    });
    $(".content2 .button").click(function(){
        $(".content2 .event-menu").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    let prevActive = $(".content3 .recommendation .menu-item-type .button.active");
    $(".content3").on("click",".recommendation .menu-item-type .button", function(){
        // prevActive.removeClass("active");
        // $(this).addClass("active");
        // prevActive = $(this);
        // console.log(prevActive);
        $(this).toggleClass("active");
    });
});



