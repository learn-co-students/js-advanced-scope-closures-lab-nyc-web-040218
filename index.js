
// So produceDrivingRange returns a function that we can then use to calculate
// if a trip is too large for a driver. We recommend referencing the test/indexTest.js for more details.
// produceTipCalculator() - Returns a function that then calculates a tip.
// For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare.
//produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.
// createDriver returns a function that returns a class that produces a Driver class.
//The class has reference to a driverId that is incremented each time a new driver is created.
//The rest of the code base does not have access to driverId.

function produceDrivingRange(range) {
  return function(block1, block2) {
    difference = Math.abs(parseInt(block1.split("th")[0]) - parseInt(block2.split("th")[0]));
    console.log(difference);
    return (difference >= range) ? `${difference - range} blocks out of range` : `within range by ${range - difference}`;
  };
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent;
  };
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = driverId++;
    }
  }
}
