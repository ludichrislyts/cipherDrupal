(function($, Drupal)
{
	Drupal.ajax.prototype.commands.validateDirectionCallback = function(ajax, response, status)
	{
		var error_div = document.getElementById('error_message');
		var input = error_div.getElementsByTagName("INPUT")[0];
		//console.log(input);
		var entry = String(response.selectedValue);
		var errorDiv = document.createElement("P");
		$(errorDiv).css('color', 'red');
		var errorText = document.createTextNode("Entry must be either 'left' or 'right'");
		errorDiv.appendChild(errorText);
		
		var len = response.selectedValue.length;
		var required = ['left', 'right'];
		for(var i = 0; i < len; i++){
			console.log(entry[0] + ', ' + required[1][i]);
			if(entry[i] === required[0][i] || entry[i] === required[1][i]){
				continue;
			}else{
				document.getElementById('error_message').appendChild(errorDiv);
		// if(entry.length === 4 && entry !== 'left' && entry !== 'righ'){
			// var errorDiv = document.createElement("DIV");
			// errorDiv.appendChild(errorText);
			
			//document.getElementById('edit-direction--2').focus();
			// }else if(entry.length >= 5 && entry !== 'right'){
				// var errorText = document.createTextNode("Entry must be either 'left' or 'right'");
				// document.getElementById('error_message').appendChild(errorDiv);
			}
		}	
		input.focus();
		//var temp = input.value;
		input.value = '';
		input.value = response.selectedValue;
		
		
	};
}(jQuery, Drupal));