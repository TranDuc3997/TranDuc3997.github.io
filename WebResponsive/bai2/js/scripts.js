$(window).scroll(function() {
if(Math.floor($(window).scrollTop() + $(window).height()) >= $(document).height() - 1) {
    $(".blood-js").show();//show blood
    // Change properties while scroll to boottom
    $(".row").children("p").css("color","#850000");
    $(".content").css("background-color","#000000").css("color","#840000");
    $(".info").css("background-color","#330000").css("color","#850000");
    $(".header__body__content").css("background-color","#330000").css("color","#867d7d").children("img").attr("src","images/header__content-hornor.png");
    $("h3").css("border-color","#330000");
    changeImage(true);
    $("html, body").css("overflow","hidden");//disable scroll
    //Auto scroll to Top while scroll end
    $("html, body").animate({
        scrollTop: 0,
    },5000);
    //Return properties original
    setTimeout(function(){
        changeImage(false);
        $(".blood-js").hide();
        $(".row").children("p").removeAttr("style");
        $(".content").removeAttr("style");
        $(".info").removeAttr("style");
        $(".header__body__content").removeAttr("style").children("img").attr("src","images/header__content.png");
        $("html, body").css("overflow","auto");//enable scroll
    },7000);
}
});
 /**
  * Replace Image of poster flim
  * @param  typeImage 
  * typeImage = true image is hornor
  * typeImage = false image is normal
  */
 function changeImage (typeImage) {
    if(typeImage)
        $(".row").each(function(index) {
           var pos = index +1;
           $(this).children("img").attr("src","images/content__img-"+ pos +"_hornor.jpg");
    });
    else {
        $(".row").each(function(index) {
            var pos = index +1;
            $(this).children("img").attr("src","images/content__img-"+ pos +".jpg");
        });
    }
 }
