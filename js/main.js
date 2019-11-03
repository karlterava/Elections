$('.vote-start').click(function(){ 
  $('.vote-button').toggle();
});
$('.vote-button').click(function(){
  candidate = $(this).parent().attr('title');
  $.getJSON("/ulv/vote.php?candidate=" + candidate);
  return false;
});
