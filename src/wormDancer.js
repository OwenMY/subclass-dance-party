var makeWormDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.currentStep = true;
  this.position1 = left - 50;
  this.position2 = left + 50;
  this.currentMouse = true;
  console.log(window.dancers);
};

makeWormDancer.prototype = Object.create(makeDancer.prototype);
makeWormDancer.prototype.constructor = makeWormDancer;

makeWormDancer.prototype.step = function(left) {
  makeDancer.prototype.step.call(this);
  this.$node.css('border', '25px solid green');
  this.$node.css('border-radius', '25px');
  this.$node.css('position', 'absolute');

  this.interact();

  this.$node.mouseover(function() {
    $(this).css('border', '25px dotted yellow');
  });

  if (this.currentStep === true) {
    this.$node.animate({
      position: 'relative',
      width: '10%'
    }, 1000);
    this.currentStep = false;
  } else {
    this.$node.animate({
      position: 'relative',
      width: '5%'
    }, 1000);
    this.currentStep = true;
  }
};

makeWormDancer.prototype.lineUp = function(node) {
  node.css('top', '100px');
};

makeWormDancer.prototype.interact = function() {
  var thisPosition = Math.sqrt((this.top ** 2) + (this.left ** 2));
  for (var i = 0; i < window.dancers.length; i++) {
    var currentDancer = window.dancers[i];
    if (currentDancer.constructor === makeBouncyDancer) {
      var currentDancePosition = Math.sqrt((currentDancer.top ** 2) + (currentDancer.left ** 2));
      if (Math.sqrt((thisPosition ** 2) - (currentDancePosition ** 2)) < 100) {
      this.$node.toggle()
      }
    }
  }
};