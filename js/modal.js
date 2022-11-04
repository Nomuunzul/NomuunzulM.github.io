$(document).ready(function(){
          //opening
          $("#CDP").click(function(){
               $("#modalCDP").fadeIn();
          });
          $("#conc").click(function(){
               $("#modalConc").fadeIn();
          });
          $("#fertility").click(function(){
               $("#modalFertility").fadeIn();
          })
          $("#python").click(function(){
               $("#modalPython").fadeIn();
          });
          $("#PM").click(function(){
               $("#modalPM").fadeIn();
          });


          //closing
          $("#closeCDP").click(function() {
               $("#modalCDP").slideUp();
          });

          $("#closeConc").click(function() {
               $("#modalConc").slideUp();
          })

          $("#closeFertility").click(function() {
               $("#modalFertility").slideUp();
          })

          $("#closePython").click(function() {
               $("#modalPython").slideUp();
          })

          $("#closePM").click(function() {
               $("#modalPM").slideUp();
          })
     })