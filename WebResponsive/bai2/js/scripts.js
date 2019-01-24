$(window).scroll(function() {
if(Math.floor($(window).scrollTop() + $(window).height()) >= $(document).height() - 1) {
    $(".blood-js").show();//show blood
    // Change properties while scroll to boottom
    $(".content").addClass("--content__effect-js");
    $(".header__body__content").addClass("--header__body__content__effect-js").children("img").attr("src","images/header__content-hornor.png");
    changeImage(true);
    $("html, body").css("overflow","hidden");//disable scroll
    //Auto scroll to Top while scroll end
    $("html, body").animate({
        scrollTop: 0,
    },5000,function(){
        setTimeout(function(){
            changeImage(false);
            $(".blood-js").hide();
            $(".content").removeClass("--content__effect-js");
            $(".header__body__content").removeClass("--header__body__content__effect-js").children("img").attr("src","images/header__content.png");
            $("html, body").css("overflow","auto");//enable scroll
        },1000);//Return properties original
    });
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
