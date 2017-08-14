$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1input = $("input#person1").val();
    var person2input = $("input#person2").val();
    var person3input = $("input#person3").val();
    var people = [person1input, person2input, person3input];
    var newpeople = people.slice();
    newpeople.push("dan");

    $(".person1").text(person1input);
    $(".person2").text(person2input);
    $(".person3").text(person3input);
    $(".newpeople1").text(newpeople[0]);
    $(".newpeople2").text(newpeople[1]);
    $(".newpeople3").text(newpeople[2]);
    $(".newpeople4").text(newpeople[3]);
    $("#story").show();

    event.preventDefault();
  });

  // $("#formTwo").submit(function(event) {
  //   var personname = $("input#name").val();
  //
  //   $(".name").text(personname);
  //
  //   $("#letter").show();
  //
  //   event.preventDefault();
  // });
  //
  // $("#formThree").submit(function(event) {
  //   var capitals = $("input#whatwillbeshouted").val();
  //   var CAPITALSSHOUTED = capitals.toUpperCase();
  //   $(".whatwillbeshouted").text(CAPITALSSHOUTED);
  //
  //   $("#shoutedcontent").show();
  //
  //   event.preventDefault();
  // });
});
