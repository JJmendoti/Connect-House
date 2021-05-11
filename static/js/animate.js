$(document).ready(function () {

    $('#fedit').mouseenter(function () {
        $('#span-edit').show();
    });
    $('#fedit').mouseleave(function () {
        $('#span-edit').hide();
    });

    var dateDay = new Date().getDate();
    new Lightpick ({ 
        inline: true,
        minDate: moment().startOf('month').add(dateDay, 'day'),
        field : document . getElementById ( 'myDatepicker' ), 
        secondField: document . getElementById ( 'myDatepicker2' ), 
        singleDate: false,
        onSelect : function ( start, end ) { 
            document.getElementById("salid").innerHTML = start.format('DD MMMM YYYY');
            document.getElementById("regreso").innerHTML = end.format('DD MMMM YYYY');
        } });

        $( "#numPerson" ).change(function () {
            $("#nump").text($( "#numPerson option:selected" ).text()+' Personas');
            let nigth = $("#val_nigth").val()
            let nump = $( "#numPerson option:selected" ).text()
            if(parseInt(nump) > 0){
                 let result = parseInt(nigth) * parseInt(nump);
                 $("#value").val(result);
                 $("#val").text('COP $'+result);
            }
        });
});


$(".flip").click(function () {
    $(this).parents(".card").toggleClass("flipped");
});
$(".clickcard").click(function () {
    $(this).toggleClass("flipped");
});



