$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1input = $("input#person1").val();
    var person2input = $("input#person2").val();
    var animalInput = $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1input);
    $(".person2").text(person2input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });

  $("#formTwo").submit(function(event) {
    var personname = $("input#name").val();

    $(".name").text(personname);

    $("#letter").show();

    event.preventDefault();
  });

  $("#formThree").submit(function(event) {
    var capitals = $("input#whatwillbeshouted").val();
    var CAPITALSSHOUTED = capitals.toUpperCase();
    $(".whatwillbeshouted").text(CAPITALSSHOUTED);

    $("#shoutedcontent").show();

    event.preventDefault();
  });
});
