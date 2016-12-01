// $(function(){
	// TweenMax.to(
	// 	$.(.img), //элемент
	// 	2, //время
	// 	{// свойство
	// 		width:300
	// 	});
	// до какого
	// TweenMax.to($('.img'), 2,{width:300});
	///fromTo от и до
	// TweenMax.fromTo($('.img'), 2,
	// 	{opacity:0,y:100},
	// 	{opacity:1,y:0}
	// );
	// // из этого до того которое в css
	// // TweenMax.from($('.img'), 2,{width:300,  ease: Elastic.easeOut.config( 1, 0.3),
	// TweenMax.from($('.img'), 2,{width:300,
	// 	// callbackfunction
	// 	onComplete:function(){
	// 	console.log('fgehtyjuuy')
// }
// });

	//timeLimeMax
	// var tl = new TimelineMax();
		// tl.to($('.img'), 2,{width:300})
		// .to($('.img'), 2,{width:100})
		// .to($('.img'), 2,{width:500})
		// .to($('.img'), 2,{opacity:0.5})
		// tl.to($('.img'), 1, {scale: 0.5}, 'main-menu__logo');
		// будет исчезать по очереди через 0.5с
		// tl.staggerTo($('.img'), 4, {opacity: 0}, 0.5);
// });
	TweenMax.fromTo($('.pendulum'), 2,{
		transformOrigin: "50% 0%",
		ease: Linear.easeNone,
		rotation:-7
	}, {
		rotation:7,
		repeat: -1,
		yoyo: true
	});
	TweenMax.to($('.h-arrow'), 12,{
		transformOrigin: "91% 23%",
		ease: Linear.easeNone,
		rotation:360,
		repeat:-1
	});
	TweenMax.to($('.m-arrow'), 1,{
		transformOrigin: "8% 9%",
		ease: Linear.easeNone,
		rotation:360,
		repeat:-1
	});



	if (window.addEventListener) {
		window.addEventListener("storage", handle_storage, false);
	} else {
		window.attachEvent("onstorage", handle_storage);
	};

	function handle_storage(e) {
		if (!e) { e = window.event; }
		console.log(e);
	}
