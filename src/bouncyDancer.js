var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  console.log(this.top);
  this.currentStep = true;
  this.position1 = top - 50;
  this.position2 = top + 50;
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function(top) {
  makeDancer.prototype.step.call(this);
  this.$node.css('border', '15px solid yellow');
  this.$node.css('border-radius', '10px');
  this.$node.css('position', 'absolute');

  if (this.currentStep === true) {
    this.$node.animate({
      position: 'absolute',
      top: this.position1
    }, 1000);
    this.currentStep = false;
  } else {
    this.$node.animate({
      position: 'absolute',
      top: this.position2
    }, 1000);
    this.currentStep = true;
  }
};

makeBouncyDancer.prototype.lineUp = function(node) {
  node.css('left', '20px');
};