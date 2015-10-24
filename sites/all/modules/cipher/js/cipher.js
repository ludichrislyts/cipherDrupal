(function ($, Drupal) {
	Drupal.ajax.prototype.commands.validateDirectionCallback = function (ajax, response, status) {
		//console.log(input);
		var error_div = document.getElementById('error_message');
		var input = error_div.getElementsByTagName("INPUT")[0];
		var entry = String(response.selectedValue);
		if('left'.indexOf(entry) !== -1){
		}else if('right'.indexOf(entry) !== -1){
		}else{
			console.log('it is here in second else');
			var errorP = document.createElement("P");
			$(errorP).css('color', 'red');
			var errorText = document.createTextNode("Entry must be either 'left' or 'right'");
			errorP.appendChild(errorText);
			document.getElementById('error_message').appendChild(errorP);
		}
		input.focus();
		input.value = '';
		input.value = response.selectedValue;


	};
} (jQuery, Drupal));