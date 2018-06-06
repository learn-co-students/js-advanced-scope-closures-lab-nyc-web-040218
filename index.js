function produceDrivingRange(distance) {
  return function (driveStart, driveEnd) {
    let start = parseInt(driveStart, 10);
    let end = parseInt(driveEnd, 10);
    let range = Math.abs(end - start);
    let difference = distance - range;

    if (difference > 0) {
      return `within range by ${difference}`
    }
    else {
     return `${Math.abs(difference)} blocks out of range`
    }
  }
 }

function produceTipCalculator(percentage) {
  return function (fare) {
  return percentage * fare
  }
}

function createDriver() {
  let id = 0;
  return function Driver(name) {
    this.name = name;
    this.id = ++id;
  }
}
