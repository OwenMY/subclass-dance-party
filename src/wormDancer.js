<<<<<<< HEAD
var makeWormDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.currentStep = true;
  this.position1 = left - 50;
  this.position2 = left + 50;
  this.currentMouse = true;
  console.log(window.dancers);
=======

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
>>>>>>> f1b31d4a8e85de2be917079e7006b9e400606027
};

makeWormDancer.prototype = Object.create(makeDancer.prototype);
makeWormDancer.prototype.constructor = makeWormDancer;

makeWormDancer.prototype.step = function(left) {
<<<<<<< HEAD
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
=======
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
>>>>>>> f1b31d4a8e85de2be917079e7006b9e400606027
    }, 1000);
    this.currentStep = false;
  } else {
    this.$node.animate({
<<<<<<< HEAD
      position: 'relative',
      width: '5%'
=======
      width: '100px'
>>>>>>> f1b31d4a8e85de2be917079e7006b9e400606027
    }, 1000);
    this.currentStep = true;
  }
};

<<<<<<< HEAD
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
=======
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
>>>>>>> f1b31d4a8e85de2be917079e7006b9e400606027
};