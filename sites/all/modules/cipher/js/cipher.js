(function ($, Drupal) {
	Drupal.ajax.prototype.commands.validateDirectionCallback = function (ajax, response, status) {
		//console.log(input);
		alert('hello world');
		var error_div = document.getElementById('error_message');
		var input = error_div.getElementsByTagName("INPUT")[0];
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

		}else{
			console.log('it is here in second else');
			var errorP = document.createElement("P");
			$(errorP).css('color', 'red');
			var errorText = document.createTextNode("Entry must be either 'left' or 'right'");
			errorP.appendChild(errorText);
			document.getElementById('error_message').appendChild(errorP);

			$(button).attr("disabled", true);
			$(button).css("color", "red");
			// $(button).attr("style", '!important');
			$(button).attr("value", "Don't click here");
		}
		input.focus();
		input.value = '';
		input.value = response.selectedValue;
		console.log(response.selectedValue);
		if(response.selectedValue.length >= 5 && response.selectedValue !== 'right'){
			$(button).attr("disabled", true);
		}else if(response.selectedValue.length <= 4 && response.selectedValue !== 'left'){
			$(button).attr("disabled", true);
		}

	};
} (jQuery, Drupal));