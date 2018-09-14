/*
 * jsCalendar theme preview
 * 
 * This script enables print-screen mode with blue or green background
 * so that a screen shot can be captured and edited on Gimp.
 *
 * You can toggle print-screen mode with the `g` or `b` keys.
 */

(function(){
	var ptrsc_mode = false;
	document.addEventListener('keypress', function(event){
		// Get key
		event = event || window.event;
		var key = event.key || event.which || event.keyCode;
		if (typeof key === 'number'){
			key = String.fromCharCode(key);
		}
		key = key.toLowerCase();

		// Select color
		var color;
		if (key == 'g') color = '#00ff00';
		else if (key == 'b') color = '#0000ff';
		else return;

		// Change mode
		ptrsc_mode = !ptrsc_mode;

		// Apply mode
		document.body.style.backgroundColor = (ptrsc_mode) ? color : '#FFFFFF';
	}, false);
})();
