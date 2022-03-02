
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
  console.log(this.$node);
  var $window = window.dancers;

  makeDancer.prototype.step.call(this);

  if ($window.length !== 0) {
    this.interact();
  }
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

makeWormDancer.prototype.lineUp = function() {
  this.$node.css('top', '20px');
};

makeWormDancer.prototype.interact = function() {
  // var thisPosition = (this.top ** 2) + (this.left ** 2);
  var x1 = this.left;
  var y1 = this.top;
  // var wind = $('document');
  // console.log(wind)
  // if (window.dancers.length !== undefined) {
  for (var i = 0; i < window.dancers.length; i++) {
    var currentDancer = window.dancers[i];
    var x2 = currentDancer.left;
    var y2 = currentDancer.top;
    if (currentDancer.constructor === makeBouncyDancer) {
      // var currentDancePosition = (currentDancer.top ** 2) + (currentDancer.left ** 2);
      var fullX = Math.round(Math.pow(x2 - x1, 2));
      var fullY = Math.round(Math.pow(y2 - y1, 2));
      // console.log('fullX' + ':' + fullX);
      // console.log('fullY' + ':' + fullY);
      var distance = Math.round(Math.sqrt(fullX - fullY) * 1.0);
      // console.log(distance);
      this.$node.toggle();
    }
  }
  // }
};