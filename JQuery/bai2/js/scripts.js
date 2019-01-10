timeauto = 5000;
width = 648;
index_prev = 1;
var interval;
$(document).ready(function() {
    initSilde();
    createAutoPlay();
    clickNav();
    $("#nav_next").click(function() {
        changeIndexNext();
        clearInterval(interval);
    });
    $("#nav_prev").click(function() {
        changeIndexPrev();
        clearInterval(interval);
    });
});
function createAutoPlay(){
   interval = setInterval(function(){
        changeIndexNext()
    }, timeauto);
}
function changeIndexPrev() {
    if(index_prev == 1) {
        index_prev = 5;
        moveIndex1(4);
    }
    else {
        for(var iItem = 5 ; iItem > 0 ; iItem--){
            $("#item-"+ iItem).animate({
                left: "+=" + width      
            });
        }
        setOpacity(--index_prev);
    }
}
function changeIndexNext() {
    if(index_prev == 5) {
        index_prev = 1;
        moveIndex5(4);
    }
    else {
        for(var iItem = 1 ; iItem < 6 ; iItem++){
            $("#item-"+ iItem).animate({
                left: "-=" + width 
            });
        }
        setOpacity(++index_prev);
    }
}
function moveIndex1(index) {
    for(var iItem = 1 ; iItem < 6 ; iItem++){
        $("#item-"+ iItem).animate({
            left: "-=" + width * index
        });
    }
    setOpacity(index_prev);    
}
function moveIndex5(index) {
    for(var iItem = 5 ; iItem > 0 ; iItem--){
        $("#item-"+ iItem).animate({
            left: "+=" + width * index
        });
    }
    setOpacity(index_prev);
}
function clickNav() {
    $(".item_nav").click(function(){
        var sliderSplit = this.id.split('-');
        var index = sliderSplit[1];
        if(index < index_prev) {
            index = index_prev - index;
            index_prev = sliderSplit[1];
            moveIndex5(index);
        } else {
            index = index - index_prev;
            index_prev = sliderSplit[1];
            moveIndex1(index);
        }
    clearInterval(interval);
    });
}
function setOpacity(index){
    $(".item_nav").css("opacity",1);
    $("#item_nav-" + index).css("opacity",0.5);
}
function initSilde() {
    for(var iItem = 2 ; iItem < 6 ; iItem++) {
        $("#item-" + iItem).animate({
             left : "+=" + width * (iItem-1)
        });
    }
    for(var iItem = 2 ; iItem < 6 ; iItem++)
        $("#item-"+iItem).show(100);
    $("#item-1").css("display","block");
    setOpacity(1);
}