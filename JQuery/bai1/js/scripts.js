var index_prev = 0 // index click prev
// event click bar
$(function(){
  $(".button-js").click(function() {
    var sliderSplit = this.id.split('-');
    var index = parseInt(sliderSplit[1]);
    $(".btn__hidden").css('pointer-events', 'none'); // disable event click
    if(index == 1){
      $("#modal-1").css('display','block').css('top','8px').animate({top:60},500);
    }
    else{
      $("#modal-2").css('display','block').css('top','8px').animate({top:60},500);
    }
  });
});
//event close modal
$(function(){
  $(".close-js").click(function(){
    $(".btn__hidden").css('pointer-events','auto'); // enable event click
    var sliderSplit = this.id.split('-');
    $("#modal-"+sliderSplit[1]).css('display', 'none');

  });
});
//event handling index bar
$(function() {
  $(".btn__hidden").click(function() {
    var sliderSplit = this.id.split('-'); // split the string at the hyphen
    var index = parseInt(sliderSplit[1]);
    var src;
    if($(this).attr('src') === 'images/about'+ index +'_mb_hover.jpg'){
      src = 'images/about'+ index +'_mb.jpg';
      $('#hd' + index + '-js').animate({
        height: 'toggle'
      });
      index_prev = 0;
      $(this).attr('src', src);
    }
    else{
      if(index_prev > 0){
        $('#about-' + index_prev).attr('src','images/about'+ index_prev +'_mb.jpg');
        $('#hd' + index_prev + '-js').hide();
      }
      $('#hd' + index + '-js').animate({
        height: 'toggle'
      });
      src = 'images/about'+ index +'_mb_hover.jpg';
      index_prev = index;
      $(this).attr('src', src);
    }
  });
});

