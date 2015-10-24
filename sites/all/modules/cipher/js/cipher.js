(function($, Drupal)
{
	Drupal.ajax.prototype.commands.validateDirectionCallback = function(ajax, response, status)
	{
		//console.log(input);
		var error_div = document.getElementById('error_message');
		var input = error_div.getElementsByTagName("INPUT")[0];
		var entry = String(response.selectedValue);		
		var len = response.selectedValue.length;
		var required = ['left', 'right'];
		for(var i = 0; i < len; i++){
			if(entry.length === required[1].length){ 
				if(entry === required[1]){
					console.log(entry + ', ' + required[0] + ', ' + required[1] + ', nested if');
					continue;					
				}else{
					console.log('it is here in second else');
					var errorP = document.createElement("P");
					$(errorP).css('color', 'red');
					var errorText = document.createTextNode("Entry must be either 'left' or 'right'");
					errorP.appendChild(errorText);
					document.getElementById('error_message').appendChild(errorP);
				}
			}else if(entry[i] === required[0][i] || entry[i] === required[1][i] ){
				console.log(entry[i] + ', ' + required[0][i] + ", " + required[1][i] + ', main if loop');
				continue;
				// }
				// else{
				// 	console.log(entry + ', it is here in first else');
				// 	var errorP = document.createElement("P");
				// 	$(errorP).css('color', 'red');
				// 	var errorText = document.createTextNode("Entry must be either 'left' or 'right'");
				// 	errorP.appendChild(errorText);
				// 	document.getElementById('error_message').appendChild(errorP);	
				// }
			}else{
				console.log('it is here in second else');
				var errorP = document.createElement("P");
				$(errorP).css('color', 'red');
				var errorText = document.createTextNode("Entry must be either 'left' or 'right'");
				errorP.appendChild(errorText);
				document.getElementById('error_message').appendChild(errorP);
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