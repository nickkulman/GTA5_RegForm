//    Переключение верхних кнопок и остаются CSS свойства
   
   $('.button_author').on('click', function(){
    $('.button_register').removeClass('selected');
    $('.button_author').addClass('selected');
    });

    $('.button_register').on('click', function(){
    $('.button_author').removeClass('selected');
    $('.button_register').addClass('selected');
    });

// Функционал табов


    $(".button_author").click(function (e) { 
    $("#form1").addClass('active');
    $("#form2").removeClass('active');
    $("#form3").removeClass('active');
    e.stopPropagation();
    });

    $(".button_register").click(function (e) { 
    $("#form1").removeClass('active');
    $("#form2").addClass('active');
    $("#form3").removeClass('active');
    e.stopPropagation();
    });

    $(".button_account.continue").click(function (e) { 
        $("#form1").removeClass('active');
        $("#form2").removeClass('active');
        $("#form3").addClass('active');

        // $('.button_author').removeClass('selected');
        // $('.button_register').removeClass('selected');
        e.stopPropagation();
    });
    

    $(".button_account.enter").click(function (e) { 
        
        $("#form2").removeClass('active');
        $("#form1").addClass('active');
        // $("#form3").addClass('active');
        $('.button_author').removeClass('selected');
        e.stopPropagation();
    });

    $(".button_account.finish").click(function (e) { 
        $("#form1").removeClass('active');
        $("#form2").removeClass('active');
        $("#form3").addClass('active');
        // $("#form1").addClass('active');
        $('.button_author').removeClass('selected');
        $('.button_register').removeClass('selected');
        e.stopPropagation();
    });

  