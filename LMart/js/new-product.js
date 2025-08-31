$(document).ready(function(){
    $("header").load("index.html header > *");
    $("aside").load("index.html aside > *");
    $("footer").load("index.html footer > *");
    // loadItem();
});


$(".new-product-list .buttonbox .button").hover(function(){
    let hint = $(".new-product-list .buttonbox .button .hint");
    hint.css("display", "block");
    hint.stop().animate({
        opacity: 1
    }, 300);
}, function(){
    let hint = $(".new-product-list .buttonbox .button .hint");
    hint.css("display", "none");
    hint.stop().animate({
        opacity: 0
    }, 300);
});

$(".new-product-list").on("click", ".buttonbox .button", function(){
    loadItem();
});
$(".new-product-list").on("click", ".buttonbox .button .hint", function(e){
    e.stopPropagation();
});
$(".new-product-list").on("hover", ".buttonbox .button .hint", function(e){
    e.stopPropagation();
});

let product_count = 0;
function loadItem(){
    let items = '';
    for (let i = 0; i < 8; i++) {
        let discount_rate = Math.floor(Math.random() * (51 - 10)) + 10;
        let origin = Math.floor(Math.random() * (5000)) * 10 + 1000;
        let now = Math.floor(origin * (100 - discount_rate) / 100);
        now -= now % 10;
        items += `
        <div class="item">
            <div class="imgbox">
                <img src="https://picsum.photos/id/${24 + (++product_count)}/1000/1000" alt="">
            </div>
            <div class="textbox">
                <div class="icon">
                    <div>신상품</div>
                    <div>배송가능</div>
                    <div>이벤트</div>
                </div>
                <div class="title">
                    <h3>신상품 ${product_count}</h3>
                </div>
                <div class="price">
                    <div class="discount">
                        <p>${discount_rate}%</p>
                    </div>
                    <div class="origin">
                        <p>${origin}원</p>
                    </div>
                    <div class="now">
                        <p>${now}원</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    $(".new-product-list").append(items);
};
