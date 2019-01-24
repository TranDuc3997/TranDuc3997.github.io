timeauto = 5000;
width = 648;
index_prev = 0; // index before event click
var interval;
//** Main call function */
$(document).ready(function() {
    initSilde();
    // createAutoPlay();
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
    if(index_prev == 0) {
        index_prev = 4;
        moveIndex(4);
    }
    else {
        disableClick();
        for(var iItem = 4 ; iItem > 0 ; iItem--){
            $(".slideshow li").eq(iItem).animate({
                left: "+=" + width      
            }).promise().done(function () {
                enableClick();
            });
        }
        setOpacity(--index_prev);
    }
}
// Change Index with envet button next
function changeIndexNext() {
    if(index_prev == 4) {
        index_prev = 0;
        moveIndex(4);
    }
    else {
        disableClick();
        for(var iItem = 0 ; iItem < 5 ; iItem++){
            $(".slideshow li").eq(iItem).animate({
                left: "-=" + width 
            }).promise().done(function () {
                enableClick();
            });
        }
        setOpacity(++index_prev);
    }
}

function moveIndex(index) {
    disableClick();
    if(index_prev == 4){// Animate for event index from 5 to 1
        for(var iItem = 0 ; iItem < 5 ; iItem++){
            $(".slideshow li").eq(iItem).animate({
                left: "-=" + width * index,
            }).promise().done(function () {
                enableClick();
            });
        }
    }else {// Animate for event index from 1 to 5
        for(var iItem = 4 ; iItem > -1 ; iItem--){
            $(".slideshow li").eq(iItem).animate({
                left: "+=" + width * index,
            }).promise().done(function () {
                enableClick();
            });
        }
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
            moveIndex(index);
        } else {
            index = index - index_prev;
            index_prev = sliderSplit[1];
            moveIndex(index);
        }
    clearInterval(interval);
    createAutoPlay();
    });
}
// Set opacity for navagtion item while selected or click
function setOpacity(index){
    $(".nav > li").css("opacity",1);
    $(".nav > li").eq(index).css("opacity",0.5);
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
    setOpacity(0);
}
//disable event click
function disableClick() {
    $(".nav > li").css("pointer-events","none");
    $("#nav_prev").css("pointer-events","none");
    $("#nav_next").css("pointer-events","none");
}
function enableClick() {
    $(".nav > li").css("pointer-events","auto");
    $("#nav_prev").css("pointer-events","auto");
    $("#nav_next").css("pointer-events","auto");
}