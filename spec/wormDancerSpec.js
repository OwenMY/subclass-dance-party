describe('wormDancer', function() {

  var wormDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    wormDancer = new makeWormDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(wormDancer.$node).to.be.an.instanceof(jQuery);
  });

  // need to change toggle to whatever function in jQuery shuffles
  it('should have a step function that makes its node shuffle', function() {
    sinon.spy(wormDancer.$node, 'animate');
    wormDancer.step();
    expect(wormDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(wormDancer, 'step');
      expect(wormDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(wormDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(wormDancer.step.callCount).to.be.equal(2);
    });
  });
});
