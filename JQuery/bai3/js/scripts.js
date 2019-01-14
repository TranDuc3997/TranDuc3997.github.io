var rotation = [1080,-720,-360,360,720,1080]; // value roatation
var id = 1;
// create image with image random from 1 to 5
function createLeaves(id) {
  idleaves = generateRandomNumber(1,5);
  var img =  $('<img />', {
            id: 'leaves-'+ id +'-js',
            // class: 'leaves--hidden-js',
            src: 'images/leaves'+ idleaves +'.png',
            alt: 'leaves1'
            }).appendTo('.container');
    return img;
}
// Function create random from min to max
function generateRandomNumber(min , max) {
    return Math.floor(Math.random() * (max-min) + min );
} 
// function remove leaves while leaves Y over height parent
function removeLeaves (leaves) {
    $(leaves).remove();
}
// Set animate leave drop with libary TweenMax
setInterval(function(){
    var leaves = createLeaves(id++);
    var time = generateRandomNumber(5,15);
    var maxWidth = $(document).width();
    var x_start = generateRandomNumber(0,maxWidth);
    var x_end = generateRandomNumber(0,maxWidth);
    var y_end = 600;
   TweenMax.fromTo($(leaves), time, {
       x: x_start,
       y: 0
    },{
       x: x_end,
       y: y_end,
       rotationX:rotation[generateRandomNumber(0,5)],
       rotationY:rotation[generateRandomNumber(0,5)],
       onComplete: function () { // While complete animate
        removeLeaves(leaves);
       }
    });
},700);
