$(document).ready(function () {
  $("#go-propery").click(function () {
    $(".form-user").hide();
    $(".form-property").show();
  });

  $("#go-user").click(function () {
    $(".form-user").show();
    $(".form-property").hide();
  });

  $(".go-property-register").click(function () {
    $(".form-register-user-new").hide();
    $(".form-register-property-new").show();
    // $(".go-property-register").addClass("activate-btn");
    // $(".go-user-register").addClass("desactivate-btn");
  });

  $(".go-user-register").click(function () {
    $(".form-register-user-new").show();
    $(".form-register-property-new").hide();
    // $(".go-property-register").addClass("desactivate-btn");
    // $(".go-user-register").addClass("activate-btn");
  });
});

$("li a").click(function (e) {
  //e.preventDefault();
  let $this = $(this);
  $this.closest("ul").find("li.active,a.active").removeClass("active");
  $this.addClass("active");
  $this.parent().addClass("active");
});

// window.addEventListener("load", function () {
//   new Glider(document.querySelector(".carousel__lista"), {
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     draggable: true,
//     dots: ".carousel__indicadores",
//     arrows: {
//       prev: ".carousel__anterior",
//       next: ".carousel__siguiente",
//     },
//     responsive: [
//       {
//         // screens greater than >= 775px
//         breakpoint: 450,
//         settings: {
//           // Set to `auto` and provide item width to adjust to viewport
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         // screens greater than >= 1024px
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 3,
//         },
//       },
//     ],
//   });
// });



// BOTON GO TO TOP
// let btnTop = document.getElementById("back-to-top").value;

// window.onscroll = function() {backtop()};
// function backtop() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     btnTop.style.display = "block";
//   } else {
//     btnTop.style.display = "none";
//   }
// }
// function backToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }