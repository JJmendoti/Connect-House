$(document).ready(function(){

    $('#go-propery').click(function(){
          $('.form-user').hide();
          $('.form-property').show();

    });

    $('#go-user').click(function(){
        $('.form-user').show();
        $('.form-property').hide();

  });


    $('#go-property-register').click(function(){
        $('.form-register-user').hide();
        $('.form-register-property').show();

    });

    $('#go-user-register').click(function(){
        $('.form-register-user').show();
        $('.form-register-property').hide();

    });
 });

 $('li a').click(function(e) {
    //e.preventDefault();
    let $this = $(this);
    $this.closest('ul').find('li.active,a.active').removeClass('active');
    $this.addClass('active');
    $this.parent().addClass('active');

});
