$(document).ready(function () {

    $('#fedit').mouseenter(function () {
        $('#span-edit').show();
    });
    $('#fedit').mouseleave(function () {
        $('#span-edit').hide();
    });
});


$(".flip").click(function () {
    $(this).parents(".card").toggleClass("flipped");
});
$(".clickcard").click(function () {
    $(this).toggleClass("flipped");
});



