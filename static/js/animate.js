$(document).ready(function(){

    if($("#alerta").hasClass("d-block")){
     alert("holi")
    }
 });






// Carousel Discover 
// let itemPositions = [];
// let numberOfItems = $('#scroller .item').length;

// function assignPositions() {
//   for (let i = 0; i < numberOfItems; i++) {
//     if (i === 0) {
//       itemPositions[i] = 'left-hidden';
//     } else if (i === 1) {
//       itemPositions[i] = 'left';
//     } else if (i === 2) {
//       itemPositions[i] = 'middle';
//     } else if (i === 3) {
//       itemPositions[i] = 'right';
//     } else {
//       itemPositions[i] = 'right-hidden';
//     }
//   }
//   $('#scroller .item').each(function(index) {
//     $(this).addClass(itemPositions[index]);
//   });
// }

// function scroll(direction) {
//   if (direction === 'prev') {
//     itemPositions.push(itemPositions.shift());
//   } else if (direction === 'next') {
//     itemPositions.unshift(itemPositions.pop());
//   }
//   $('#scroller .item').removeClass('left-hidden left middle right right-hidden').each(function(index) {
//     $(this).addClass(itemPositions[index]);
//   });
// }

// $(document).ready(function() {

//   assignPositions();
//   let autoScroll = window.setInterval("scroll('next')", 2000);

//   $('#scroller').hover(function() {
//     window.clearInterval(autoScroll);
//     $('.nav').stop(true, true).fadeIn(200);
//   }, function() {
//     autoScroll = window.setInterval("scroll('next')", 2000);
//     $('.nav').stop(true, true).fadeOut(200);
//   });

//   $('.prev').click(function() {
//     scroll('prev');
//   });
//   $('.next').click(function() {
//     scroll('next');
//   });

// });

// Fin Carousel Discover 