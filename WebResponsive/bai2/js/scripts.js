$(window).scroll(function() {
if(Math.floor($(window).scrollTop() + $(window).height()) >= $(document).height() - 1) {
    $(".blood-js").show();
    $(".row").children("p").css("color","#ffffff");
    $(".content").css("background-color","#000000").css("color","#840000");
    $(".info").css("background-color","#330000").css("color","#850000");
    $(".header__body__content").css("background-color","#330000").css("color","#867d7d").attr("src","images/header__banner--info-hornor.png");
    $("h3").css("border-color","#330000");
    changeImage(true);
    $("html, body").css("overflow","hidden");//disable scroll
    $("html, body").animate({
        scrollTop: "0px",
    }, 5000);
    setTimeout(function(){
        changeImage(false);
        $(".blood-js").hide();
        $(".row").children("p").removeAttr("style");
        $(".content").removeAttr("style");
        $(".info").removeAttr("style");
        $(".header__body__content").removeAttr("style");
        $("html, body").css("overflow","auto");//enable scroll
    },6000);
}
});
 // Change Image follow type
 function changeImage (typeImage) {
    if(typeImage)
        $(".row").each(function(index) {
            iImage = index + 1;
           $(this).children("img").attr("src","images/content__img-"+ iImage +"_hornor.jpg");
    });
    else {
        $(".row").each(function(index) {
            iImage = index + 1;
           $(this).children("img").attr("src","images/content__img-"+ iImage +".jpg");
        });
    }
 }
