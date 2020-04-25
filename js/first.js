

$(".choose-your-own button").click( function() {
  $(this).parent().find("button").addClass("hide");
});

$(".death").click( function() {
  window.location.href="dead6.html"});

$("#choice1").click( function() {
  $("#option2").addClass("show");
});

$("#choice2").click( function() {
  $("#option3").addClass("show");
});

$("#choice3").click( function() {
  $("#option4").addClass("show");
});

$("#choice4").click( function() {
  $("#option5").addClass("show");
});

$("#choice6").click( function() {
  $("#option6").addClass("show");
});

$("#choice8").click( function() {
  $("#option5").addClass("show");
});

$("#choice9").click( function() {
  window.location.href=".html"});

$("#choice12").click( function() {
  window.location.href=".html"});


$("#blue").click( function() {
  $("body").addClass("blue");
});

$("#cheat").hover( function() {
  $(this).css(
    "top", (Math.random() * (60 - -60) + -60)
  );
});
$("#cheat").click(function(){
  window.location.href="cheat.html"
});
