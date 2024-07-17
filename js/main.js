(function ($)
  { "use strict"

})(jQuery);


// Start Modal-phone
$('.phone-btn').on('click',function() {
    $('.wrapper-phone').fadeIn();
});
$('.form-phone').on('click',function() {
    $('.wrapper-phone').fadeOut();
});
$('.form-phone__close').on('click',function() {
    $('.wrapper-phone').fadeOut();
});
$('.overlay-phone').on('click',function() {
    $('.wrapper-phone').fadeOut();
});
$('.form-phone').children().on('click',function(e) {
    e.stopPropagation();
});
$('.modal-sent').on('click',function() {
    $('.wrapper-phone').fadeOut();
});
$('.modal-sent__btn').on('click',function() {
    $('.wrapper-phone').fadeOut();
});
// END Modal-phone

/* HAMBURGER */

$('.mobile-menu__btn').on('click',function(){
    $('.hamburger').toggle();
})

$('#closeMenu').on('click',function(){
    $('.hamburger').hide();
});
/* HAMBURGER */

// Start Scroll
$(document).ready(function(){
    $('a[href^="#collection"]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - -0
        }, 800);
        e.preventDefault();
    });
    return false;
});

// END Scroll

//фиксированная шапка при скроле
$(".header-top__scroll").removeClass("default");
$(window).scroll(function(){
  if ($(this).scrollTop() > 10){
    $(".header-top__scroll").addClass("default").fadeIn("fast");
  } else{
    $(".header-top__scroll").removeClass("default").fadeIn("fast");
  };
});
$(".header-top__bg").removeClass("default");
$(window).scroll(function(){
  if ($(this).scrollTop() > 10){
    $(".header-top__bg").addClass("default").fadeIn("fast");
  } else{
    $(".header-top__bg").removeClass("default").fadeIn("fast");
  };
});
$(".offer-wrapper").removeClass("default");
$(window).scroll(function(){
  if ($(this).scrollTop() > 10){
    $(".offer-wrapper").addClass("default").fadeIn("fast");
  } else{
    $(".offer-wrapper").removeClass("default").fadeIn("fast");
  };
});
$(".page-top").removeClass("default");
$(window).scroll(function(){
  if ($(this).scrollTop() > 10){
    $(".page-top").addClass("default").fadeIn("fast");
  } else{
    $(".page-top").removeClass("default").fadeIn("fast");
  };
});
$(".product").removeClass("default");
$(window).scroll(function(){
  if ($(this).scrollTop() > 10){
    $(".product").addClass("default").fadeIn("fast");
  } else{
    $(".product").removeClass("default").fadeIn("fast");
  };
});



// Start slider
$('.single-content').slick({
    initialSlide: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'dots-btn',
    fade: true,
    asNavFor: '.single-img',
    fade: true,
    });
    $('.single-img').slick({
    initialSlide: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.single-content',
    arrows: false,
    dots: false,
    focusOnSelect: true,
    fade: true,
    });
    $('.single-team').slick({
    initialSlide: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    dotsClass: 'dots-team',
    fade: false,
    });

/* TABS */
$('.nav-tab').click(function(e) {
  e.preventDefault();

  $('.nav-tab').removeClass('active');
  $('.tab-content__item').removeClass('active');
  $(this).addClass('active');
  $($(this).attr('data-tab')).addClass('active');
})
$('.nav-tab:first').click();

/* CART */
$('.product-delete').click(function() {
   $(".cart-table__row").css("display", "none");
})
var numb = $('#cart-table__price').text()
$('.cart-table__price_total').text(numb);

$('#amount-info').on('change', function(){
  var Value = $('#amount-info').val();
  var numb = $('#cart-table__price').text()
  var sum = Number(Value)*Number(numb)
  $('.cart-table__price_total').text(sum);
});

$(window).load(function(){
  var cat = [];
    $('.cart-table__price_total').each(function() {
    cat.push($(this).text());
    });
    var sum = 0;
    function arraySum(array){
    for(var i = 0; i < array.length; i++){
    sum += parseInt(array[i]);
    }
    return sum;
    }
    arraySum(cat);
    $('.subtotal').text(sum);
    $('.total').text(sum);
});

$('.cart-button__btn').click(function() {
    var cat = [];
    $('.cart-table__price_total').each(function() {
    cat.push($(this).text());
    });
    var sum = 0;
    function arraySum(array){
    for(var i = 0; i < array.length; i++){
    sum += parseInt(array[i]);
    }
    return sum;
    }
    arraySum(cat);
    $('.subtotal').text(sum);
    $('.total').text(sum);
})

$('.cart-coupon__btn').click(function() {  
    var kyp = 'kypon';  
    var skidka = 1;
    var total = $('.subtotal').text()
    key = $('input.kypon').val();
        if(key == kyp){
            skidka = 20;
            var result = total-(total / 100 * skidka)
            $('.total').text(result);
        }else{
            
        }
});


/* CART */

$('.info__btn').click(function(){
  if($(".size__input").is(":checked")&$(".color__input").is(":checked")) {
    $(".header-basket__namber").addClass("basket__namber")  
    var basket__namber = $('#number-info').val();
      $('.basket__namber').text(basket__namber);
      return true;
    }
    window.alert('Выберите размер и цвет товара!');
    return false;
});

$('.form-сheckout__btn').click(function(){
  if($(".payment__input").is(":checked")) {
    return true;
    }
    window.alert('Выберите способ оплаты!');
    return false;
});

//Валидация и отправка формы
$(document).ready(function() {
    $('[data-submit]').on('click', function(e) {
        e.preventDefault();
        $(this).parent('form').submit();
        $(this).parent('div').submit();
    })
    $.validator.addMethod("regex",function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );

    // Функция валидации и вывода сообщений
    function valEl(el) {
        el.validate({
            rules: {
                tel: {
                    required: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                },
                name: {
                    required: true,
                    regex: '[A-Za-zА-Яа-яЁё]{1,32}'
                },
                email: {
                    required: true,
                    email: true
                },
                side: {
                    required: true,
                    regex: '[A-Za-zА-Яа-яЁё]{1,32}'
                },
                city: {
                    required: true,
                    regex: '[A-Za-zА-Яа-яЁё]{1,32}'
                },
                outside: {
                    required: true,
                    regex: '[A-Za-zА-Яа-яЁё]{1,32}'
                },
                house: {
                    required: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{1,20}$'
                },
                flat: {
                    required: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{1,20}$'
                },
            },
            messages: {
                tel: {
                    required: 'Поле обязательно для заполнения',
                    regex: 'Телефон может содержать символы + - ()'
                },
                name: {
                    required: 'Поле обязательно для заполнения',
                    regex: 'Неверный формат'
                },
                email: {
                    required: 'Поле обязательно для заполнения',
                    email: 'Неверный формат E-mail'
                },
                side: {
                    required: 'Поле обязательно для заполнения',
                    regex: 'Неверный формат'
                },
                city: {
                    required: 'Поле обязательно для заполнения',
                    regex: 'Неверный формат'
                },
                outside: {
                    required: 'Поле обязательно для заполнения',
                    regex: 'Неверный формат'
                },
                house: {
                    required: 'Поле обязательно для заполнения',
                    regex: 'Неверный формат'
                },
                flat: {
                    required: 'Поле обязательно для заполнения',
                    regex: 'Неверный формат'
                },
                payment1: {
                    required: 'Поле обязательно для заполнения',
                },
                payment2: {
                    required: 'Поле обязательно для заполнения',
                }
            },

            // Начинаем проверку id="" формы
            submitHandler: function(form) {
                var $form = $(form);
                var $formId = $(form).attr('id');
                switch ($formId) {
                    // Если у формы id="form-box" - делаем:
                    
                    // Если у формы id="popupResult" - делаем:
                    case 'form-phone':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                    $('#preloader-active').fadeIn();
                                    $form.trigger('reset');
                                }, 1100);
                                setTimeout(function() {
                                    $('#preloader-active').fadeOut();
                                    $('#form-phone').fadeOut();
                                    $('#modal-sent').fadeIn(3000);
                                }, 1300);
                            });
                        break;
                    case 'form-contact':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                    $form.trigger('reset');
                                    $('#contac-sent').fadeIn();
                                }, 1100);
                            });
                        break; 
                    case 'form-сheckout':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                    $form.trigger('reset');
                                    location.href = "success.html";
                                }, 1100);
                            });
                        break;
                }
                return false;
            }
        })
    }

// Запускаем механизм валидации форм, если у них есть класс .js-form
$('.js-form').each(function() {
    valEl($(this));
});
    
});
