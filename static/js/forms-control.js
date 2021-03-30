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