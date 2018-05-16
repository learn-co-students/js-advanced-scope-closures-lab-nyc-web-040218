function produceDrivingRange(range) {
  return function(start, end) {
    const distance = Number.parseInt(end) - Number.parseInt(start);

    if (range > distance) {
      return `within range by ${range - distance}`;
    } else if (range < distance) {
      return `${distance - range} blocks out of range`;
           };

    // if (range > (Number.parseInt(end) - Number.parseInt(start))) {
    //   return `within range by ${(range - (Number.parseInt(end) - Number.parseInt(start)))}`; 
    // } else if (range < Number.parseInt(end) - Number.parseInt(start)) {
    //   return `${((Number.parseInt(end) - Number.parseInt(start)) - range)} blocks out of range`;
    // };

  };
};

function produceTipCalculator(tipPercentage) {
  return function(fare) {
    return fare * tipPercentage;
  };
};

function createDriver() {
  let DriverId = 0;
  // return the class
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    };
  };
};

