var mouse_x = -1 ; // initialize mouse_x

$(document).mousemove(function(event){
  if(mouse_x != -1) {
      if(mouse_x < event.pageX){ // layers move to right display
          moveLayer(4,1); 
          moveLayer(2,0.5);
          moveLayer(3,0.75);
      }
      else{ // layers move to left display
        moveLayer(4,-1);
        moveLayer(2,-0.5);
        moveLayer(3,-0.75);
      }
      mouse_x = event.pageX; // assign mouse_x = value mouse present
  }
  else{
      mouse_x = event.pageX; // assign mouse_x = value mouse present
  }
});
/**
 * function movelayer with event move mouse
 * @param {id layer} idLayer 
 * @param {speed move layer} speed 
 */
function moveLayer(idLayer,speed){
    $("#layer-"+idLayer).css({left: '+=' + speed});
}