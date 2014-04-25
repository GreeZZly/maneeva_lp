$(document).ready(function (){
	// $('[class*="_button"]').on('click',function(e){
	// 	e.preventDefault();
	// 	$('#order_form_bg').fadeIn(200);

	// 	var left = $(window).width()/2 - 275;
	// 	var top = $(window).height()/2 - 214;
	// 	console.log(left, top);
	// 	$('#order_form').css({'left':left,'top':top}).fadeIn(200);
	// 	$(window).resize(function(){
	// 		var left = $(window).width()/2 - 275;
	// 		var top = $(window).height()/2 - 214;
	// 		console.log(left, top);
	// 		$('#order_form').css({'left':left,'top':top}).fadeIn(200);
	// 	});
	// });
	// $('#order_form_bg').on('click',function(){
	// 	$(this).fadeOut();
	// 	$('#order_form').fadeOut();
	// });

	$("#reg_form").validate({

       rules:{

            name:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            surname:{
                required: true,
                minlength: 2,
                maxlength: 20,
            },
            second_name:{
                required: true,
                minlength: 5,
                maxlength: 20,
            },

            email:{
                required: true,
                email: true
            },
            phone:{
                required: true,
                minlength: 6,
                maxlength: 11,
                digits: true
            }
       },

       messages:{

            name:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 2 символа",
                maxlength: "Максимальное число символов - 16",
            },
            surname:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 2 символа",
                maxlength: "Максимальное число символов - 20",
            },
            second_name:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 5 символов",
                maxlength: "Максимальное число символов - 20",
            },

            email:{
                required: "Это поле обязательно для заполнения",
                email: "Неверно заполнено поле электронной почты"
            },
            phone:{
                required: "Это поле обязательно для заполнения",
                minlength: "Телефон должен быть минимум 6 символов",
                maxlength: "Телефон должен быть максимум 11 символов",
                digits: "Только цифры"
            },

       }

    });
    $("#order_book").validate({

       rules:{

            name_book:{
                required: true,
                minlength: 2,
                maxlength: 16,
            },
            
            email_book:{
                required: true,
            	email: true
            },
            phone_book:{
            	required: true,
            	minlength: 6,
                maxlength: 11,
                digits: true
            }
       },

       messages:{

            name_book:{
                required: "Это поле обязательно для заполнения",
                minlength: "Имя должно быть минимум 2 символа",
                maxlength: "Максимальное число символов - 16",
            },
            
            email_book:{
                required: "Это поле обязательно для заполнения",
                email: "Неверно заполнено поле электронной почты"
            },
            phone_book:{
                required: "Это поле обязательно для заполнения",
                minlength: "Телефон должен быть минимум 6 символов",
                maxlength: "Телефон должен быть максимум 11 символов",
                digits: "Только цифры"
            },

       }

    });
    
    $('#reg_form').on('submit', function(e){
        e.preventDefault();
        if ($(this).valid()) {
            var data = {
                    'surname' : $('#Family').val(),
                    'name': $('#name').val(),
                    'second_name': $('#father_name').val(),
                    'email':$('#email').val(),
                    'phone':$('#phone').val()
                }

            $.post('/main/order', data, function(text){
                    if (text){
                        //console.log(text)
                        $('#_name').html('<b>'+data.name+'</b>')
                        $('#thanx_modal').modal();
                    }
                });
        }
    });
    $('#order_book').on('submit', function(e){
        e.preventDefault();
        if ($(this).valid()) {
            var data = {
                    'name_book': $('#name_book').val(),
                    'email_book':$('#email_book').val(),
                    'phone_book':$('#phone_book').val()
                }

            $.post('/main/order_book', data, function(text){
                    if (text){
                        console.log(text);
                        $('#thanx_btn a').attr('href',text.src);
                        // $('#_name').html('<b>'+data.name+'</b>')
                        $('#book_modal').modal();
                    }
                });
        }
    });
	// $('#submit_button').on('click', function(){
	// 	if ($("#order_form form").validate()) {
	// 		$("#order_form form").submit();
	// 	}
	// });
    
	var left1 = $(window).width()/2 - 275;
		var top1 = $(window).height()/2 - 86;
		$('#success_submit').css({'left':left1, 'top':top1});
	$(window).resize(function(){
		var left1 = $(window).width()/2 - 275;
		var top1 = $(window).height()/2 - 86;
		$('#success_submit').css({'left':left1, 'top':top1});
	});
});