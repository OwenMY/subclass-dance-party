$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log($('.addDancerButton'))
    // console.log(dancerMakerFunctionName);
    // console.log(this);
    // console.log($(this));
    // console.log(window);
    // var makeBlinkyDancer = $(this).data('make-blinky-dancer');
    // var makeBouncyDancer = $(this).data('make-bouncy-dancer');
    // var makeShuffleDancer = $(this).data('make-shuffle-dancer');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);

  });

  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var person = window.dancers[i];
      console.log(person.$node);
      console.log(person);
      window.dancers[i].lineUp();
    }
  });
});

// function to pair dancers up!
// $('.pairUpButton').on('click', function(event) {
//   var closest = window.dancers[0];
//   for (var i = 2; i < window.dancers.length; i++) {
//     var current = window.dancers[i];
//     // var leftDifCur =
//     // var topDifCur =
//     if (Math.abs(current.left - window.dancers[i - 1].left) + Math.abs(current.top - window.dancers[i - 1].top) < (Math.abs(current.left - closest.left) + Math.abs(current.top - closest.top))) {
//       closest = window.dancers[i - 1];
//     }
//   }

// });

