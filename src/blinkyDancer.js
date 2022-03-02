<<<<<<< HEAD
=======

>>>>>>> f1b31d4a8e85de2be917079e7006b9e400606027
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img class="fire-kirby" src="assets/images/fire_kirby.png"></>');
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
// var oldStep = makeDancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

<<<<<<< HEAD
makeBlinkyDancer.prototype.lineUp = function(node) {
  node.css('left', '1000px');
=======
makeBlinkyDancer.prototype.lineUp = function() {
  this.$node.css('left', '90%');
>>>>>>> f1b31d4a8e85de2be917079e7006b9e400606027
};