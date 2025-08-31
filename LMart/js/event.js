let swiper = new Swiper(".event-preview", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".cusotm-swiper-button-next",
        prevEl: ".cusotm-swiper-button-prev",
    },
});
$(document).ready(function(){
    $("header").load("index.html header > *");
    $("aside").load("index.html aside > *");
    $("footer").load("index.html footer > *");
});
$(".coupon .option").click(function(){
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
});