// var makeDancer = function (top, left, timeBetweenSteps) {
//   this.$node = $('<span class="dancer"></span>');
//   this.top = top;
//   this.left = left;
//   this.timeBetweenSteps = timeBetweenSteps;
//   // makeDancer.prototype.step.call(this);
//   // makeDancer.prototype.setPosition.call(this, top, left);
//   this.step();
//   this.setPosition(top, left);
// };

// makeDancer.prototype.step = function() {
//   // the basic dancer doesn't do anything interesting at all on each step,
//   // it just schedules the next step
//   setTimeout(this.step.bind(this), this.timeBetweenSteps);
//   // setTimeout(this.step, this.timeBetweenSteps);
// };

// makeDancer.prototype.setPosition = function(top, left) {
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
//   //
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   console.log(this.$node);
//   this.$node.css(styleSettings);
// };

//===================================================================//

var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  console.log(this.top);
  this.currentStep = true;
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;
// var oldStep = makeDancer.prototype.step;

makeBouncyDancer.prototype.step = function(top) {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // this.$node.removeClass('dancer');
  // this.$node.addClass('bouncyDancer');
  this.$node.css('border', '15px solid yellow');
  this.$node.css('border-radius', '10px');
  this.$node.css('position', 'absolute');
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  // want to use this.node.animate here
  // use this.node.animate again

  var randomPosition = Math.random() * (100 - 1) + 1;
  var randomPosition2 = Math.random() * (100 - 1) + 1;

  if (this.currentStep === true) {
    this.$node.animate({
      position: 'relative',
      top: `${randomPosition}%`
    }, 1000);
    this.currentStep = false;
  } else {
    this.$node.animate({
      position: 'relative',
      top: `${randomPosition}%`
    }, 1000);
    this.currentStep = true;
  }

  // var randomPosition = top - 100;
  // var randomPosition2 = top + 100;

  // if (this.currentStep === true) {
  //   this.$node.animate({
  //     position: 'absolute',
  //     top: `${randomPosition}%`
  //   }, 1000);
  //   this.currentStep = false;
  // }
  // else {
  //   this.$node.animate({
  //     position: 'relative',
  //     top: top
  //   }, 1000);
  //   this.currentStep = true;
  // }
};