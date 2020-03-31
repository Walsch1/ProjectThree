$(".button").click(function() {
  console.log($("first"));
  if ( $("#first")[0].innerHTML === "RIP") {
      $("#first").html("");
      $("body").removeClass("killed");
  }
});

$("#help").click(function() {
  $("#first").append("".second p");
});
