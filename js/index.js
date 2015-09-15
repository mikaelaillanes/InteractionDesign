/*index.js*/
var inputText = "Stockholm";

$(function(){


    $('#knapp1').click(function(){
      jQuery.mobile.changePage('#pagetwo');
      console.log("hej");
      var inputTexten = document.getElementById("#inputThingToDo").value;
      console.log(inputTexten);
    });






});