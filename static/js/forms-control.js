$(document).ready(function () {
  $("#go-propery").click(function () {
    $(".form-user").hide();
    $(".form-property").show();
  });

  $("#go-user").click(function () {
    $(".form-user").show();
    $(".form-property").hide();
  });

  $("#go-property-register").click(function () {
    $(".form-register-user").hide();
    $(".form-register-property").show();
  });

  $("#go-user-register").click(function () {
    $(".form-register-user").show();
    $(".form-register-property").hide();
  });
});

$("li a").click(function (e) {
  //e.preventDefault();
  let $this = $(this);
  $this.closest("ul").find("li.active,a.active").removeClass("active");
  $this.addClass("active");
  $this.parent().addClass("active");
});

//matriz para contener las diferentes posiciones de la imagen
let itemPositions = [];
let numberOfItems = $('#scroller .item').length;
// le asignamos a cada elemento de la matriz una clase CSS en función de su posición inicial
function assignPositions() {
  for (let i = 0; i < numberOfItems; i++) {
    if (i === 0) {
      itemPositions[i] = 'left-hidden';
    } else if (i === 1) {
      itemPositions[i] = 'left';
    } else if (i === 2) {
      itemPositions[i] = 'middle';
    } else if (i === 3) {
      itemPositions[i] = 'right';
    } else {
      itemPositions[i] = 'right-hidden';
    }
  }
  //Se Agrega cada clase al elemento correspondiente * /
  $('#scroller .item').each(function (index) {
    $(this).addClass(itemPositions[index]);
  });
}

//cambiamos valores de la matriz y agregamos la clases a las imagenes
function scroll(direction) {
  if (direction === 'prev') {
    itemPositions.push(itemPositions.shift());
  } else if (direction === 'next') {
    itemPositions.unshift(itemPositions.pop());
  }
  $('#scroller .item').removeClass('left-hidden left middle right right-hidden').each(function(index) {
    $(this).addClass(itemPositions[index]);
  });
}

// esto se hace cuando los elementos del DOM estén listos 
$(document).ready(function() {

  assignPositions();
  let autoScroll = window.setInterval("scroll('next')", 3000);

//Comportamientos del desplazamiento
  $('#scroller').hover(function() {
    window.clearInterval(autoScroll);
    $('.nav').stop(true, true).fadeIn(200);
  }, function() {
    autoScroll = window.setInterval("scroll('next')", 3000);
    $('.nav').stop(true, true).fadeOut(200);
  });

//Comportamientos de clics
  $('.prev').click(function() {
    scroll('prev');
  });
  $('.next').click(function() {
    scroll('next');
  });

});