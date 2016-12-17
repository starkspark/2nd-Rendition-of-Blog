/*$(function() { 
    $('.nav').on('click', function ( e ) {
        e.preventDefault();
        $(this).parents('.nav').find('.active').removeClass('active').end().end().addClass('active');
        $(activeTab).show();
    });
});*/

<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
<script>
$(function(){
  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current');
    }
  });
});
</script>




$(".like-Unlike").click(function(e) {
    if ($(this).html() == "Like") {
        $(this).html('Unlike');
    }
    else {
        $(this).html('Like');
    }
    return false;
});

