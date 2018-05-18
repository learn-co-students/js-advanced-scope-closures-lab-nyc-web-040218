const produceDrivingRange = function(blockRange) {
  return function(start, end) {
    range = Math.abs(parseInt(start, 10) - parseInt(end, 10))
    if (blockRange >= range) {
      let diff = blockRange - range
      return (`within range by ${diff}`)
    } else {
      let diff = range - blockRange
      return (`${diff} blocks out of range`)
    }
  }
}

const produceTipCalculator = function(tipPercent) {
  return function(fare) {
    return fare * tipPercent
  }
}
