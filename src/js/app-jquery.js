//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/gsap/src/minified/TweenMax.min.js
$(function(){
	//= ./parts/fake-json.js
	//= ./parts/plugin.js
	//= ./parts/tooltip.js
	//= ./parts/visibleOpacity.js
	//= ./parts/animate.js
});
// anonymous function - best practices
// (function($, undefined){
	$(function(){



		// var img = $('.img');
		// if ( img.length ) {
		// 	console.log('класс .img - Да есть!!!!!!!!!!!!!!!')
		// } else {
		// 	console.log('Печаль.... класса .img и в помине нету!!!!!!')
		// }
		//
		// $('.element').on('click', function(event) {
		// 	event.preventDefault();
		// 	console.log('Клик');
		// 	console.log(event);
		// })
		//
		// var button = $('.up')
		// var breakpoint = 300;
		// var activClass = 'up-active';
		// //load проверка на закрузку
		// $(window).on('scroll load', function(event) {
		//
		// 	if ($(this).scrollTop()>breakpoint) {
		// 		button.addClass(activClass);
		// 	}
		// 	else  {
		// 		button.removeClass(activClass);
		// 	}
		// 	// console.log($(window).scrollTop());
		//
		// })
		//
		// button.on('click', function(event) {
		// 	// windows нельзя анимировать, (html, body) чтобы работало везде.
		// 	$('html, body').animate({
		// 		scrollTop:0
		// 	}, 500)
		// 	// $(window).scrollTop(0);
		// })
		//
		// $('.element').hover(function(e) {
		// 	/* Stuff to do when the mouse enters the element */
		// 	console.log('вошли');
		// }, function(e) {
		// 	/* Stuff to do when the mouse leaves the element */
		// 	console.log('вышли');
		// });
		//
		// var formName =$('.form-name');
		// var formEmail =$('.form-email');
		// var formPassword =$('.form-password');
		// var formCheckbox =$('.form-checkbox');
		// var submit =$('.form');

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

		// $('.form').submit(function(){
		// 	if (
		// 		$(this).find('.form-name').val() == '' ||
		// 		$(this).find('.form-email').val() == '' ||
		// 		$(this).find('.form-password').val() == '' ||
		// 		$(this).find('.form-checkbox').is(':checked') == false ) {
		// 			console.log('перехватил форму отправки');
		// 			console.log('отправка формы отменена!!!!!!');
		// 			return false;
		// 		}
		//
		// });

		// var element = $('<div>', {
		// 	class: 'element',
		// 	id: 'element',
		// 	data: {
		// 		num:1
		// 	},
		// 	style: 'color: red',
		// 	text: 'Новый элемент'
		// }).on('click', function(e) {
		// 	console.log('работает')
		// })
		//
		// $('body').append(element);

		// var link = $('.link');
		// console.log( link.attr('href'), link.attr('title') )

		// console.log( link.text() )
		// console.log( link.html() )
		// console.log( link.children() )
		// //родитель
		// console.log( link.children().eq(0).parent() )
		// // конкретный родитель
		// console.log( link.children().eq(0).parent('body') )

		// link.css({
		// 	'background-color': 'red',
		// 	display: 'block'
		// });

		// link.text('egfwegf weifugw ef wegf iwegf')
		// //плохой пример
		// link.html('<div> Текст с дивом (плохой пример смотри var element )<div>')
		// /// меняем атрибут
		// link.attr('href', 'http:yandex.ru')

		// var element = $('<div>', {
		// 	class: 'element',
		// 	id: 'element',
		// 	data: {
		// 		num:1
		// 	},
		// 	style: 'color: black',
		// 	text: 'Новый элемент'
		// }).on('click', function(e) {
		// 	console.log('работает')
		// }).append(link)

		// $('body').append(element);
		// //вставить после 4 ребенка
		// link.children().eq(4).before(element);
		// link.children().eq(4).after(element);


		// link.on('click',  function(event) {
		// 	event.preventDefault();
		// 	/* Act on the event */
		// 	link.toggle('active')
		// 	// скроется и появится через 300, stop оставливаем анимацию
		// 	link.stop(true, true).fadeOut(300).delay(400).fadeIn(300)
		// });

		// var linkClone = link.clone()
		// var linkDetach = link.detach()
		// // Удалить безвозратно
		// var remove = link.remove();
		// // обработчиков нету
		// $("body").append(remove)


		//Строим дерево из json

		// var data = [{"name":"John","color":"blue"},{"name":"Peter","color":"red"}]

		// $.each(data, function(i,element){
		// 	var element = $('<div/>', {
		// 		text: element.name,
		// 		style: 'color: ' + element.color
		// 	})
		// 	element.appendTo($('body'))

		// })

		// var container = $('<div>', {
		// 	class: 'elems'
		// }).appendTo($('body'));
		//
		// $.each(fakeData, function(index, element) {
		// 	 /* iterate through array or object */
		//
		//
		// 	 var persona = $('<div>', {
		// 	 	class: 'persona',
		// 	 	text: 'Имя ' + element.name + ' Возвраст ' + element.age + ' Ник ' + element.username
		// 	}).appendTo(container);
		// });

		// console.log( 'Максимальная высота: ' + $('.elem').maxHeight() );
		// $('.elem').height($('.elem').maxHeight())
		// высота из всех
		// $('.elem').css(
		// 	'min-height', $('.elem').maxHeight()
		// );

		// $('.elem').toolTips();
		// $('.class').visibleOpacity();
		var openMenu = $('.main-menu_toggle');
		var menu = $('.menu-lists');
		var icon = $('.icon');
		openMenu.click(function(event) {
			event.preventDefault();
			menu.toggleClass('open-menu');
			icon.toggleClass('menu').toggleClass('close');
		});



		});
// })(jQuery);
