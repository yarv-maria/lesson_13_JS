/*------------------------------- Accordion -------------------------------*/

$(window).ready(function () {

    $('.accordion-header').click(function () {
        $('.accordion-item').not($(this).siblings()).slideUp(600);
        $(this).siblings().slideToggle(600);
    });

});

/*------------ Задача на нахождение суммы чисел кратных 3 или 5 ------------*/

 var summa = 0;

 for (i = 0; i < 1000; i++) {

     if (i % 3 == 0 || i % 5 == 0 ) {
         summa = summa + i;
     }
 }

 console.log(' сумму всех чисел меньше 1000, кратных 3 или 5: ' + summa)
