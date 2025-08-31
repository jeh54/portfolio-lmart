$(document).ready(function(){
    $(window).resize(function(){
        let w = $(window).width();
        if(w <= 1200){
            $("header .search-box").css("width", "100px");
            $("header .search-box input").focus(function() {
                $("header .search-box").css("width", "400px");
            });
            
            $("header .search-box input").blur(function() {
                $("header .search-box").css("width", "100px");
            });
        }
        else{
            $("header .search-box").css("width", "500px");
            $("header .search-box input").off("focus blur");
        }
    });
    
    fetch('js/header-menu.txt')
        .then(r => r.text())
        .then(listAll => {
            let level0 = listAll.split('\n');
            let level1 = level0.map(l => l.split(','));
            let level2 = [];
            let level3 = [];
    
            let target = $("header .menu-h .sub1");
            for(let i=0;i<level1.length;i++){
                target.append(`
                    <div class="item">
                        <span>${level1[i][0]}</span>
                        <i class="fa-solid fa-caret-right"></i>
                    </div>
                `);
            }
            $("header").on("mouseenter mouseleave", ".menu-h > .menu-overview, .menu-h .submenu", function(event){
            $("header .menu-h .submenu, header .menu-h .sub1").css("display", event.type === "mouseenter" ? "block" : "none");
            if(event.type === "mouseleave")
                $("header .menu-h .submenu .sub2, header .menu-h .submenu .sub3").css("display", "none");
            });
            $("header").on("mouseenter", ".menu-h .sub1 .item", function(){
                let index = $(this).index();
                level2 = level1[index].map(l => l.split(' ').map(l => l.split(' ')));
                console.log(level2);
                target = $("header .menu-h .sub2");
                target.empty();
                for(let i=0;i<level2[1].length;i++){
                    target.append(`
                        <div class="item">
                            <span>${level2[1][i]}</span>
                            <i class="fa-solid fa-caret-right"></i>
                        </div>
                    `);
                }
            });
            $("header").on("mouseenter", ".menu-h .sub2 .item", function(){
                let index = $(this).index();
                level3 = level2[2][0].map(l => l.split('?'));
                let level4 = level3[0].map(l => l.split(';'));
                target = $("header .menu-h .sub3");
                target.empty();
                for(let i=0;i<level4[index].length;i++){
                    target.append(`
                        <div class="item">
                            <span>${level4[index][i]}</span>
                        </div>
                    `);
                }
            });
            $("header").on("mouseenter", ".menu-h .item", function(){
                $(this).parent().next().css("display", "block");
                $(this).addClass("active").siblings().removeClass("active");
            }).on("mouseenter", ".menu-h .submenu .sub1", function(){
                $(this).siblings().last().css("display", "none");
            });
        })
        .catch(error => {
            console.error('파일을 읽는 중 오류 발생:', error);
        }
    );
});
