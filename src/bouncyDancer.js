<<<<<<< HEAD
var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  console.log(this.top);
  this.currentStep = true;
  this.position1 = top - 50;
  this.position2 = top + 50;
=======

var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.position1 = top - 50;
  this.position2 = top + 50;
  this.$node.prepend('<img class="jumping-kirby" src="assets/images/jumping-kirby.png"></img>');
>>>>>>> f1b31d4a8e85de2be917079e7006b9e400606027
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function(top) {
<<<<<<< HEAD
  makeDancer.prototype.step.call(this);
  this.$node.css('border', '15px solid yellow');
  this.$node.css('border-radius', '10px');
=======

  makeDancer.prototype.step.call(this);

  // this.$node.css('border', '15px solid yellow');
  // this.$node.css('border-radius', '10px');
>>>>>>> f1b31d4a8e85de2be917079e7006b9e400606027
  this.$node.css('position', 'absolute');

  if (this.currentStep === true) {
    this.$node.animate({
<<<<<<< HEAD
      position: 'absolute',
=======
      position: 'relative',
>>>>>>> f1b31d4a8e85de2be917079e7006b9e400606027
      top: this.position1
    }, 1000);
    this.currentStep = false;
  } else {
    this.$node.animate({
<<<<<<< HEAD
      position: 'absolute',
=======
      position: 'relative',
>>>>>>> f1b31d4a8e85de2be917079e7006b9e400606027
      top: this.position2
    }, 1000);
    this.currentStep = true;
  }
};

<<<<<<< HEAD
makeBouncyDancer.prototype.lineUp = function(node) {
  node.css('left', '20px');
=======
makeBouncyDancer.prototype.lineUp = function() {
  this.$node.css('left', '20px');
>>>>>>> f1b31d4a8e85de2be917079e7006b9e400606027
};