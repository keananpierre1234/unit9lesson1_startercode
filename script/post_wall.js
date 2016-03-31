$(document).ready(function(){ 
    $('button').click(function(){
        var something = $('#message').val();
        console.log(something);
        $('#wall').prepend('<div>' + something + '</div')
        
        
    });
     });


