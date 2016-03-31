$(document).ready(function(){ 
   console.log("hi");
   
   $("button").click(function(){
       console.log("hi");
       $('#theDiv').prepend('<img id="theImg" src="http://blogs-images.forbes.com/olliebarder/files/2015/10/just_saiyan.jpg" />');
       for (var i= 0; i < 100; i++){
          $('#theDiv').prepend('<img id="theImg" src="http://blogs-images.forbes.com/olliebarder/files/2015/10/just_saiyan.jpg" />'); 
       }
      
   });
     });


