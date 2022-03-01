var makeWormDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.currentStep = true;
  this.currentMouse = true;
  this.$node.mouseover(function() {
    $(this).css('border', '25px dotted yellow');
  });
  this.$node.mouseout(function() {
    $(this).css('border', 'none');
  });
  this.$img = $('<img class="star-kirby" src="assets/images/kirby_star.png"></img>');
  this.$node.addClass('wormDancer');
  this.$node.prepend(this.$img);
};

makeWormDancer.prototype = Object.create(makeDancer.prototype);
makeWormDancer.prototype.constructor = makeWormDancer;

makeWormDancer.prototype.step = function(left) {

  makeDancer.prototype.step.call(this);

  this.$node.css('position', 'absolute');
  if (this.currentStep === true) {
    this.$node.animate({
      width: '400px'
    }, 1000);
    this.currentStep = false;
  } else {
    this.$node.animate({
      width: '100px'
    }, 1000);
    this.currentStep = true;
  }
};