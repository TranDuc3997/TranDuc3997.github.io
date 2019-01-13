var mouse_x = -1 ;
$(document).mousemove(function(event){
  if(mouse_x != -1) {
      if(mouse_x < event.pageX){
          moveLayer(4,1);
          moveLayer(2,0.5);
          moveLayer(3,0.75);
      }
      else{
        moveLayer(4,-1);
        moveLayer(2,-0.5);
        moveLayer(3,-0.75);
      }
      mouse_x = event.pageX;
  }
  else{
      mouse_x = event.pageX;
  }
});
function moveLayer(idLayer,speed){
    $("#layer-"+idLayer).css({left: '+=' + speed});
}