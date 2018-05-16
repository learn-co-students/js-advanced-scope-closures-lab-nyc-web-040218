function produceDrivingRange(blockRange) {
  return function(start, end) {
    distance = 0
    numberStart = parseInt(start.slice(0, 2))
    numberEnd = parseInt(end.slice(0, 2))
    if (numberStart > numberEnd) {
      distance = numberStart - numberEnd
  } else {
      distance = numberEnd - numberStart
    }
    if (distance <= blockRange) {
      number = blockRange - distance
      return `within range by ${number}`
  } else {
      number = distance - blockRange
      return `${number} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercentage) {
  return function (total) {
    return total * tipPercentage
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
