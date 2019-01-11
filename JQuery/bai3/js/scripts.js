var rotation = [1080,-720,-360,360,720,1080];
$(document).ready(function() {
});
var id = 1;
function createLeaves(id) {
  idleaves = generateRandomNumber(1,5);
  var img =  $('<img />', {
            id: 'leaves-'+ id +'-js',
            class: 'leaves--hidden',
            src: 'images/leaves'+ idleaves +'.png',
            alt: 'leaves1'
            }).appendTo('.container');
    return img;
}
function generateRandomNumber(min , max) {
    return Math.floor(Math.random() * (max-min) + min );
} 
function removeLeaves (leaves) {
    $(leaves).remove();
}
setInterval(function(){
    var leaves = createLeaves(id++);
    var time = generateRandomNumber(5,15);
    var maxWidth =Math.floor(($(document).width()/2) / 10);
    var x_start = generateRandomNumber(-maxWidth,maxWidth) * 10;
    var x_end = generateRandomNumber(-maxWidth,maxWidth) * 10;
    var y_end = 620;
    var rotaX = rotation[generateRandomNumber(0,5)];
   TweenMax.fromTo($(leaves), time, {
       x: x_start,
       y: 0
    },{
       x: x_end,
       y: y_end,
       rotationX:rotation[generateRandomNumber(0,5)],
       rotationY:rotation[generateRandomNumber(0,5)],
       onComplete: function () {
        removeLeaves(leaves);
       }
    });
},700);
