var makeShuffleDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.currentStep = true;
};

makeShuffleDancer.prototype = Object.create(makeDancer.prototype);
makeShuffleDancer.prototype.constructor = makeShuffleDancer;
// var oldStep = makeDancer.prototype.step;

makeShuffleDancer.prototype.step = function(left) {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  // want to use this.node.animate here
  // use this.node.animate again

  // this.$node.addClass('shuffleDancer');
  // var blueNode = {
  //   color: pink,
  //   border: '10px',
  //   border-radius: '10px',
  //   position: 'absolute'
  // }
  // this.$node.css(blueNode);
  this.$node.css('border', '25px solid blue');
  this.$node.css('border-radius', '25px');
  this.$node.css('position', 'absolute');
  // this.$node.removeClass('dancer');
  var randomPosition = Math.random() * (100 - 1) + 1;
  var randomPosition2 = Math.random() * (100 - 1) + 1;

  if (this.currentStep === true) {
    this.$node.addClass('shuffleDancer');
    this.$node.animate({
      position: 'relative',
      left: `${randomPosition}%`
    }, 1000);
    this.currentStep = false;
  } else {
    this.$node.addClass('shuffleDancer');
    this.$node.animate({
      position: 'relative',
      left: `${randomPosition}%`
    }, 1000);
    this.currentStep = true;
  }
};