function produceDrivingRange(block) {
  return function(start, end) {
    const startBlock = parseInt(start.slice(0,-2));
    const endBlock = parseInt(end.slice(0,-2));
    const range = Math.abs(endBlock - startBlock - block);

    if (endBlock - startBlock > block) {
      return `${range} blocks out of range`;
    } else {
      return `within range by ${range}`;
    }
  }
}

function produceTipCalculator(tip) {
  return function(price) {
    return tip * price;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
