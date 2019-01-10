$(document).ready(function() {
});
var id = 1;
function createLeaves(id) {
  idleaves = Math.floor(generateRandomNumber(1,5));
  var img =  $('<img />', {
            id: 'leaves-'+ id +'-js',
            class: 'leaves--hidden',
            src: 'images/leaves'+ idleaves +'.png',
            alt: 'leaves1'
            }).appendTo('.container');
    return img;
}
function generateRandomNumber(min , max) {
    return Math.random() * (max-min) + min ;
} 
setInterval(function(){
    var leaves = createLeaves(id++);
   TweenMax.fromTo("#" + $(leaves).attr("id"), 3, {css: {left: "350", top: "0"}}, {css:{left:"230", top: "612"}} );
},1000);