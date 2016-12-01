"use strict";

(function( $ ) {
     $.fn.maxHeight = function() {
			 //Переменная для возрашения максимальной высоты
	      var max = 0;
				// Перебераем все элементы для которых вызван плагин
	      this.each(function() {
					// Записываем в переменную высоты если
					max = Math.max( max, $(this).outerHeight() );
	      });
				// возврашаем максимальную высоту
	      return max;

     };

})(jQuery);
