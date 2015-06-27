$(function() {

	$(".responsive-video").fitVids();

	$('li.scroll a[href^="#"]').bind('click.smoothscroll',function(e) {
    e.preventDefault();
  
    var target = this.hash,
    $target = $(target);
    var clickedElement = $(this);
  
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 400, 'swing', function () {
      window.location.hash = target;
      $('li.scroll').removeClass('active');
      clickedElement.closest('li.scroll').addClass('active');
    });
  });

  $('.documentation-section h2').waypoint(function() {
    $('li.scroll').removeClass('active');
    $('ul.nav.nav-sidebar > li > a[href="#' + $(this).parent('.documentation-section').attr('id') + '"]').parent('.scroll').addClass('active');
  }, { offset: 60 });

  var animationElement = '#animation-demo > div';
  $(animationElement).click(function() {
    $this = $(this);
    $(animationElement).removeClass();
    $this.addClass('animated ' + $this.attr('data-animation'));
  });

});