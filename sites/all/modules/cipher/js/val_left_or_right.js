

(function ($) {
    Drupal.behaviors.cipher = {
        attach : function(context, settings){
            $('input#edit-direction', context).onkeyup(function(){
                alert("hi again");
                var direction_text = $('#edit-direction').val();
                if (direction_text != 'left' && direction_text != 'right') {
                $('#error_message').html('Please type left or right');
                } else {
                $('#error_message').html('OK');
                }
            });            
        }
    }
    alert("hi");
    
})(jQuery);