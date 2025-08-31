$(document).ready(function(){
    $("header").load("index.html header > *");
    $("aside").load("index.html aside > *");
    $("footer").load("index.html footer > *");
    $(".category").load("new-product.html .category > *");

    $(".hot").on("mouseenter", ".item .iconbox2 .icon", function(){
        $(this).parent().find(".hint").stop().fadeIn(500);
    }).on("mouseleave", ".item .iconbox2 .icon", function(){
        $(this).parent().find(".hint").stop().fadeOut(500);
    });

    $(".hot").on("click", ".item .iconbox2 .icon", function(){
        console.log("sd");
        $(this).parent().find(".icon").toggleClass("active");
    });
    
    // loadItem($(".hot1 .itembox .item"), $(".hot1 .itembox"), 7);
    // loadItem2($(".hot1 .itembox .item"), $(".hot2 .itembox"), 8);

    $(".hot").on("mouseenter", ".itembox .button", function(){
        $(this).find(".hint").stop().fadeIn(500);
    }).on("mouseleave", ".itembox .button", function(){
        $(this).find(".hint").stop().fadeOut(500);
    });

    $(".hot").on("click", ".itembox .button", function(e){
        // e.preventDefault();
        // let scroll = $(window).scrollTop();

        let target = $(this).closest('.hot1').length ? $(".hot1 .itembox .item") : $(".hot1 .itembox .item");
        let location = $(this).closest('.hot1').length ? $(".hot1 .itembox") : $(".hot2 .itembox");
        let loadFunction = $(this).closest('.hot1').length ? loadItem : loadItem2;
        loadFunction(target, location, 8);

        // $(window).scrollTop(scroll);
    });
    // $(".hot1").on("click", ".itembox .button", function(){
    //     loadItem($(".hot1 .itembox .item"), $(".hot1 .itembox"), 8);
    // });
    // $(".hot2").on("click", ".itembox .button", function(){
    //     loadItem2($(".hot1 .itembox .item"), $(".hot2 .itembox"), 8);
    // });

    $(".hot").on("click mouseenter", ".itembox .button .hint", function(e){
        e.stopPropagation();
    });
});

//target : 복사하고 싶은 대상
//location : 들어가는 위치
function loadItem(target, location, count){
    for(let i=0;i<count;i++){
        let item = target.eq(0).clone();
        location.append(item);
    }
}
let topCount = 1;
function loadItem2(target, location, count){
    for(let i=0;i<count;i++){
        let item = target.eq(0).clone();
        let label = item.find(".label");
        label.css("display", "block");
        label.html("TOP<br>"+topCount++);
        location.append(item);
    }
}

