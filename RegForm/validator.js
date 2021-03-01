


$(document).ready(function() {
    var form = document.getElementsByTagName('form');
    var login = $('#login').val();
    var password = $('#password').val();
    var enter_login = $('#enter_login').val();
    var email = $('#email').val();
    var enter_password = $('#enter_password').val();
    var confirm_password = $('#confirm_password').val();
    var regEx = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    var validEmail = regEx.test(email);

    for (var i=0;i<form.length;i++) {
        form[i].addEventListener('submit', function(e) {
            e.preventDefault();



//   $('form').submit(function(e) {
//     e.preventDefault();
                
                
            
                $(".error").remove();

                // первая форма
            
                if (login.length < 3) {
                $('input#login').addClass('error');
                $('.divider1').addClass('red_divider');
                }
                if (password.length < 3) {
                $('input#password').addClass('error');
                $('.divider2').addClass('red_divider');
                $('.nocorrect').addClass('visible');
                $('.form__link').addClass('visible');
                }

                // else {
                //     $('input#login').removeClass('error');
                //     $('.divider1').removeClass('red_divider');
                //     $('input#password').removeClass('error');
                //     $('.divider2').removeClass('red_divider');
                //     $('.nocorrect').removeClass('visible');
                // }

                // вторая форма

                if (enter_login.length < 1) {
                    $('input#enter_login').addClass('error');
                    $('.divider1').addClass('red_divider');
                }       
                        
                if (email.length< 1) {
                    $('input#email').addClass('error');
                    $('.divider2').addClass('red_divider');
                    $('.nocorrect').addClass('visible');
                } 

                if (!validEmail) {
                    $('input#email').addClass('error');
                }

                // else {
                //     $('input#enter_login').removeClass('error');
                //     $('.divider1').removeClass('red_divider');
                //     $('input#email').removeClass('error');
                //     $('.divider2').removeClass('red_divider');
                //     $('.nocorrect').removeClass('visible');
                // }

                // третья форма


                if (enter_password.length < 1) {
                    $('input#enter_password').addClass('error');
                    $('.divider1').addClass('red_divider');
                }
                if (confirm_password.length < 1) {
                    $('input#confirm_password').addClass('error');
                    $('.divider2').addClass('red_divider');
                    $('.nocorrect').addClass('visible');
                }

                // else {
                //     $('input#enter_password').removeClass('error');
                //     $('.divider1').removeClass('red_divider');
                //     $('input#confirm_password').removeClass('error');
                //     $('.divider2').removeClass('red_divider');
                //     $('.nocorrect').removeClass('visible');
                // }




        });

    }


  });

//   $('#form2').submit(function(e) {
//         e.preventDefault();
//         var enter_login = $('#enter_login').val();
//         var email = $('#email').val();
     
//         $(".error").remove();
//         $('.divider1').removeClass('red_divider');
//         $('.divider2').removeClass('red_divider');
     
//         if (enter_login.length < 1) {
//           $('input#enter_login').addClass('error');
//           $('.divider1').addClass('red_divider');
//         }
      
    
//         if (email.length< 1) {
//           $('input#email').addClass('error');
//           $('.divider2').addClass('red_divider');
//         } 
        
//         else {
//           var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/;
//           var validEmail = regEx.test(email);
//           if (!validEmail) {
//             $('input#email').addClass('error');
//           }
//         }
     
//     });

    // $('#form3').submit(function(e) {
    //     e.preventDefault();
    //     var enter_password = $('#enter_password').val();
    //     var confirm_password = $('#confirm_password').val();
     
    //     $(".error").remove();
    //     $('.divider1').removeClass('red_divider');
    //     $('.divider2').removeClass('red_divider');
     
    //     if (enter_password.length < 1) {
    //       $('input#enter_password').addClass('error');
    //       $('.divider1').addClass('red_divider');
    //     }
    //     if (confirm_password.length < 1) {
    //       $('input#confirm_password').addClass('error');
    //       $('.divider2').addClass('red_divider');
    //     }
    
    //   });





