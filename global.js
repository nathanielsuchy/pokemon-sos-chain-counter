$(document).ready(function() {
  var turn = 0;
  var helper = 0;
  var turnInterval = 0;
  var whichPokemon = "right";

  function switchPokemon() {
    if (whichPokemon == "right") {
      whichPokemon = "left";
      $("#whichpokemon").html(whichPokemon);
      turnInterval = 0;
      console.log("Turn Interval is: " +
        "0" +
        ". Use the " + whichPokemon + " Pokemon");
    } else {
      whichPokemon = "right";
      $("#whichpokemon").html(whichPokemon);
      turnInterval = 0;
      console.log("Turn Interval is: " +
        "0" +
        ". Use the " + whichPokemon + " Pokemon");
    }
  }

  $("#resetcounter").click(function() {
    turn = 0;
    turnInterval = 0;
    helper = 0;
    whichPokemon = "right";
    $("#helper").html("0");
    $("#turn").html("0");
    $("#turnnum").html("0");
    $("#shinychance").html("1");
    $("#hiddenabilitychance").html("0");
    $("#perfectivchance").html("0");
    $("#whichpokemon").html(whichPokemon);
    console.clear();
  });

  $("#helperplus").click(function() {
    helper = helper + 1;
    $("#helper").html(helper);
    console.log("Helper Counter is: " + helper);

    if (helper > 255) {
      turn = 0;
      helper = 0;
      $("#helper").html("0");
      $("#turn").html("0");
      $("#shinychance").html("1");
      $("#hiddenabilitychance").html("0");
      $("#perfectivchance").html("0");
      console.clear();
    } else if (helper > 69) {
      $("#shinychance").html("4");
      $("#hiddenabilitychance").html("15");
      $("#perfectivchance").html("4");
    } else if (helper > 29) {
      $("#hiddenabilitychance").html("15");
      $("#perfectivchance").html("4");
    } else if (helper > 20) {
      $("#hiddenabilitychance").html("10");
      $("#perfectivchance").html("3");
    } else if (helper > 19) {
      $("#perfectivchance").html("3");
      $("#hiddenabilitychance").html("5");
    } else if (helper > 9) {
      $("#hiddenabilitychance").html("5");
      $("#perfectivchance").html("2");
    } else if (helper > 4) {
      $("#perfectivchance").html("1");
    }

  });

  $("#helperminus").click(function() {
    helper = helper - 1;
    $("#helper").html(helper);
    console.log("Helper Counter is: " + helper);

    if (helper > 255) {
      turn = 0;
      helper = 0;
      $("#helper").html("0");
      $("#turn").html("0");
      $("#shinychance").html("1");
      $("#hiddenabilitychance").html("0");
      $("#perfectivchance").html("0");
      console.clear();
    } else if (helper > 69) {
      $("#shinychance").html("4");
      $("#hiddenabilitychance").html("15");
      $("#perfectivchance").html("4");
    } else if (helper > 29) {
      $("#hiddenabilitychance").html("15");
      $("#perfectivchance").html("4");
    } else if (helper > 20) {
      $("#hiddenabilitychance").html("10");
      $("#perfectivchance").html("3");
    } else if (helper > 19) {
      $("#perfectivchance").html("3");
      $("#hiddenabilitychance").html("5");
    } else if (helper > 9) {
      $("#hiddenabilitychance").html("5");
      $("#perfectivchance").html("2");
    } else if (helper > 4) {
      $("#perfectivchance").html("1");
    } else if (helper < 5) {
      $("#perfectivchance").html("0");
    }
  });

  $("#turnplus").click(function() {
    turn = turn + 1;
    turnInterval++;
    console.log("Turn Interval is: " + turnInterval);

    if (turnInterval == 30) {
      switchPokemon();
    } else {}

    $("#turn").html(turn);
    $("#turnnum").html(turn);
    console.log("Turn Counter is: " + turn);
  });

  $("#turnminus").click(function() {
    turn = turn - 1;
    turnInterval--;
    $("#turn").html(turn);
    console.log("Turn Interval is: " + turnInterval);
    console.log("Turn Counter is: " + turn);
  });

  $("body").keypress(function(e) {
    if (String.fromCharCode(e.charCode) == "t") {
      turn = turn + 1;
      turnInterval++;
      console.log("Turn Interval is: " + turnInterval);

      if (turnInterval == 30) {
        switchPokemon();
      } else {}

      $("#turn").html(turn);
      $("#turnnum").html(turn);
      console.log("Turn Counter is: " + turn);
    } else if (String.fromCharCode(e.charCode) == "h") {
      helper = helper + 1;
      $("#helper").html(helper);
      console.log("Helper Counter is: " + helper);

      if (helper > 255) {
        turn = 0;
        helper = 0;
        $("#helper").html("0");
        $("#turn").html("0");
        $("#shinychance").html("1");
        $("#hiddenabilitychance").html("0");
        $("#perfectivchance").html("0");
        console.clear();
      } else if (helper > 69) {
        $("#shinychance").html("4");
        $("#hiddenabilitychance").html("15");
        $("#perfectivchance").html("4");
      } else if (helper > 29) {
        $("#hiddenabilitychance").html("15");
        $("#perfectivchance").html("4");
      } else if (helper > 20) {
        $("#hiddenabilitychance").html("10");
        $("#perfectivchance").html("3");
      } else if (helper > 19) {
        $("#perfectivchance").html("3");
        $("#hiddenabilitychance").html("5");
      } else if (helper > 9) {
        $("#hiddenabilitychance").html("5");
        $("#perfectivchance").html("2");
      } else if (helper > 4) {
        $("#perfectivchance").html("1");
      }
    } else {
      /* Nope */
    }
  });

});
