(function ($, Drupal) {
	Drupal.ajax.prototype.commands.validateDirectionCallback = function (ajax, response, status) {
		//console.log(input);
		var error_div = document.getElementById('error_message');
		var input = error_div.getElementsByTagName("INPUT")[0];
<<<<<<< HEAD
		var form = document.getElementById('cipher-form');
		var button = form.getElementsByTagName('INPUT')[3];
		$(button).attr("value", "Shift it!");
		$(button).css("color", "black");		
		if($(button).attr("disabled")){
			$(button).attr("disabled", false);
		}else{
			$(button).attr("disabled", false);
		}
		var entry = String(response.selectedValue);
		if('left'.indexOf(entry) === 0){
		}else if('right'.indexOf(entry) == 0){
=======
		var entry = String(response.selectedValue);
		if('left'.indexOf(entry) !== -1){
		}else if('right'.indexOf(entry) !== -1){
>>>>>>> 1827975e0bab86bee92ded1a0f34385d8cad97dd
		}else{
			console.log('it is here in second else');
			var errorP = document.createElement("P");
			$(errorP).css('color', 'red');
			var errorText = document.createTextNode("Entry must be either 'left' or 'right'");
			errorP.appendChild(errorText);
			document.getElementById('error_message').appendChild(errorP);
<<<<<<< HEAD
			$(button).attr("disabled", true);
			$(button).css("color", "red");
			// $(button).attr("style", '!important');
			$(button).attr("value", "Don't click here");
=======
>>>>>>> 1827975e0bab86bee92ded1a0f34385d8cad97dd
		}
		input.focus();
		input.value = '';
		input.value = response.selectedValue;
<<<<<<< HEAD
		console.log(response.selectedValue);
		if(response.selectedValue.length >= 5 && response.selectedValue !== 'right'){
			$(button).attr("disabled", true);
		}else if(response.selectedValue.length <= 4 && response.selectedValue !== 'left'){
			$(button).attr("disabled", true);
		}
=======

>>>>>>> 1827975e0bab86bee92ded1a0f34385d8cad97dd

	};
} (jQuery, Drupal));