$(document).ready(loadPage);
var target = 0;

function loadPage() {
  var $buttons = $('.control');
  var $previous = $('.previous');
  var $next = $('.next');

  $buttons.click(changeImage);
  $previous.click(previousImage);
  $next.click(nextImage);
};

function changeImage() {
  target = parseInt($(this).data('target'));
  showImage(target);
};

function previousImage(e) {
  e.preventDefault();
  target = target - 1;
  target = (target < 0) ? 5 : target;
  showImage(target);
  $buttons.css('background', 'blue');
};

function nextImage(e) {
  e.preventDefault();
  target = target + 1;
  target = (target > 5) ? 0 : target;
  showImage(target);
};

function showImage(target) {
  var $lastSlide = $('div.active');
  var $slide = $("div[data-slide='" + target + "']");
  $lastSlide.removeClass('active');
  $slide.addClass('active');
};


/* Función para cambiar las imágenes con el teclado */
$(document).keyup(function arrow(event) {
  var keyCode = event.which;
  console.log(keyCode);
  if (keyCode === 37) {
    target = target - 1;
    target = (target < 0) ? 5 : target;
    showImage(target);
  } else if (keyCode === 39) {
    target = target + 1;
    target = (target > 5) ? 0 : target;
    showImage(target);
  }
});