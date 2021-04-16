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

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});