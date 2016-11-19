//= ../../bower_components/jquery/dist/jquery.min.js

// anonymous function - best practices
(function($, undefined){
	$(function(){ 
		var img = $('.img');
		if ( img.length ) {
			console.log('класс .img - Да есть!!!!!!!!!!!!!!!')
		} else {
			console.log('Печаль.... класса .img и в помине нету!!!!!!')
		}

		$('.element').on('click', function(event) {
			event.preventDefault();
			console.log('Клик');
			console.log(event);
		})

		var button = $('.up')
		var breakpoint = 300;
		var activClass = 'up-active';
		//load проверка на закрузку
		$(window).on('scroll load', function(event) {

			if ($(this).scrollTop()>breakpoint) {
				button.addClass(activClass);
			}
			else  {
				button.removeClass(activClass);
			}
			// console.log($(window).scrollTop());

		})

		button.on('click', function(event) {
			// windows нельзя анимировать, (html, body) чтобы работало везде.
			$('html, body').animate({
				scrollTop:0
			}, 500)
			// $(window).scrollTop(0);
		})

		$('.element').hover(function(e) {
			/* Stuff to do when the mouse enters the element */
			console.log('вошли');
		}, function(e) {
			/* Stuff to do when the mouse leaves the element */
			console.log('вышли');
		});

		var formName =$('.form-name');
		var formEmail =$('.form-email');
		var formPassword =$('.form-password');
		var formCheckbox =$('.form-checkbox');
		var submit =$('.form');

		// Мой код не работает
		// if ( formName.val() == '' ) {
		// 	submit.on('submit', function(event) {
		// 		/* Act on the event */
		// 		console.log('перехватил форму отправки')
		// 		event.preventDefault();
		// 		console.log('отправка формы отменена')
		// 	});
		// }

		// Код из книги проверка в момент нажатии submit
		// $('form').submit(function(){ 
		// 	if ($(this).find('.form-name').val() == '') { 
		// 		alert('Введите имя пользователя'); 
		// 		return false; 
		// 	} 
		// 	// кусок кода с отправкой 
		// 	// ... 
		// }); 

		$('.form').submit(function(){ 
			if (
				$(this).find('.form-name').val() == '' || 
				$(this).find('.form-email').val() == '' ||
				$(this).find('.form-password').val() == '' ||
				$(this).find('.form-checkbox').is(':checked') == false ) {
					console.log('перехватил форму отправки');
					console.log('отправка формы отменена!!!!!!');
					return false; 
				} 

		}); 


	});
})(jQuery);
