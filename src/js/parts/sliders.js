$('.slider').slick();

$('#myModal').on('shown.bs.modal', function (e) {
	$('.slider').slick('setPosition');
})