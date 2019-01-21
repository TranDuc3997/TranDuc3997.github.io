$(document).ready(function() {
    $("#check__JP-js").change(function() {
        if(this.checked) { // hide text japan
            $(".text").children("p").children("b").removeAttr("style");
        }else {
            $(".text").children("p").children("b").css("opacity","0");
        }
    });
    $("#check__EN-js").change(function() { //hide text english
        if(this.checked) {
            $(".text").children(".dummy").removeAttr("style");
        }else {
            $(".text").children(".dummy").css("opacity","0");
        }
    });
});
