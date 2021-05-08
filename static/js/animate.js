$(document).ready(function () {

    $('#fedit').mouseenter(function () {
        $('#span-edit').show();
    });
    $('#fedit').mouseleave(function () {
        $('#span-edit').hide();
    });


    new Lightpick ({ 
        inline: true,
        field : document . getElementById ( 'myDatepicker' ), 
        secondField: document . getElementById ( 'myDatepicker2' ), 
        singleDate: false,
        onSelect : function ( date ) { 
            
        } });
});


$(".flip").click(function () {
    $(this).parents(".card").toggleClass("flipped");
});
$(".clickcard").click(function () {
    $(this).toggleClass("flipped");
});



