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
        onSelect : function ( start, end ) { 
            document.getElementById("salida").innerHTML = start.format('DD MMMM YYYY');
            document.getElementById("regreso").innerHTML = end.format('DD MMMM YYYY');
        } });

        $( "#numPerson" ).change(function () {
            $("#nump").text($( "#numPerson option:selected" ).text());
            
        });
});


$(".flip").click(function () {
    $(this).parents(".card").toggleClass("flipped");
});
$(".clickcard").click(function () {
    $(this).toggleClass("flipped");
});



