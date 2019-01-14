timeauto = 5000;
width = 648;
index_prev = 1; // index before event click
var interval;
//** Main call function */
$(document).ready(function() {
    initSilde();
    createAutoPlay();
    clickNav();
    $("#nav_next").click(function() {
        changeIndexNext();
        clearInterval(interval);
        createAutoPlay();
    });
    $("#nav_prev").click(function() {
        changeIndexPrev();
        clearInterval(interval);
        createAutoPlay();
    });
    
});
//**Create auto play with time 5s */
function createAutoPlay(){
   interval = setInterval(function(){
        changeIndexNext()
    }, timeauto);
}
// Change Index with envet button prev
function changeIndexPrev() {
    if(index_prev == 1) {
        index_prev = 5;
        moveIndex1(4);
    }
    else {
        for(var iItem = 5 ; iItem > 0 ; iItem--){
            $("#item-"+ iItem + "-js").animate({
                left: "+=" + width      
            });
        }
        setOpacity(--index_prev);
    }
}
// Change Index with envet button next
function changeIndexNext() {
    if(index_prev == 5) {
        index_prev = 1;
        moveIndex5(4);
    }
    else {
        for(var iItem = 1 ; iItem < 6 ; iItem++){
            $("#item-"+ iItem + "-js").animate({
                left: "-=" + width 
            });
        }
        setOpacity(++index_prev);
    }
}
// Animate for event index from 5 to 1
function moveIndex1(index) {
    for(var iItem = 1 ; iItem < 6 ; iItem++){
        $("#item-"+ iItem + "-js").animate({
            left: "-=" + width * index
        });
    }
    setOpacity(index_prev);    
}
// Animate for event index from 1 to 5
function moveIndex5(index) {
    for(var iItem = 5 ; iItem > 0 ; iItem--){
        $("#item-"+ iItem + "-js").animate({
            left: "+=" + width * index
        });
    }
    setOpacity(index_prev);
}
// Event click navagation item
function clickNav() {
    $(".nav > li").click(function(){
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
    createAutoPlay();
    });
}
// Set opacity for navagtion item while selected or click
function setOpacity(index){
    $(".nav > li").css("opacity",1);
    $("#item_nav-" + index + "-js").css("opacity",0.5);
}
// initialize SildeShow
function initSilde() {
    for(var iItem = 2 ; iItem < 6 ; iItem++) {
        $("#item-" + iItem + "-js").animate({
             left : "+=" + width * (iItem-1)
        });
    }
    for(var iItem = 2 ; iItem < 6 ; iItem++)
        $("#item-"+ iItem + "-js").show(100);
    $("#item-1-js").css("display","block");
    setOpacity(1);
}