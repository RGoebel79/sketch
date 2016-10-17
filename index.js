 $(document).ready(function() {

   var pixels = 0;
   var row;
   var col;
   var i = 0;
   var j = 0;
   var ele = document.getElementsByClassName("column");
   var modal = document.getElementById("modal");

   function done() {
     $(".column").mouseenter(function() {
      var op = $(this).css("opacity");
      op -= .4;
      $(this).fadeTo(125, op);
     });
   }

 var grid = function(pix) {

     var high = (960 / pixels) - 2;
     var wide = (960 / pixels) - 3;

     for (i = 0; i <= pix; i++) {
       row = '<div id=\"row' + i + '\" class=\"row\"></div>';
       $("#container").append(row);
       for (j = 0; j <= pix; j++) {
         col = '<div id=\"col' + j + '\" class=\"column\"></div>';
         $("#row" + i).append(col);

       }
     }
     $(".column").height(high);
     $(".column").width(wide);
     $(".row").height(high + 2);
     done();

   }

   $(".sub").click(function(event) {
     event.preventDefault();
     pixels = document.getElementById("pixels").value;
     var final = pixels - 1;
     modal.style.display = "none";

     grid(final);
   });

   document.getElementById("reset").addEventListener("click", function() {

     $(".column").remove();
     $(".row").remove();
     modal.style.display = "block";

   });

 });