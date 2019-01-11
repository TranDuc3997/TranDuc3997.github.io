
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
function removeLeaves (leaves) {
    $(leaves).remove();
}
setInterval(function(){
    var leaves = createLeaves(id++);
    var time = generateRandomNumber(5,15);
    console.log("Width " + $(document).width());
    var maxWidth =Math.floor(($(document).width()/2) / 10);
    console.log(maxWidth);
    var x_start = generateRandomNumber(-maxWidth,maxWidth) * 10;
    var x_end = generateRandomNumber(-maxWidth,maxWidth) * 10;
   TweenMax.fromTo($(leaves), time, {
       x: x_start,
       y: 0
    },{
       x: x_end,
       y: 800,
       rotationX:generateRandomNumber(-360,360),
       rotationY:generateRandomNumber(-360,360),
    });
},700);
