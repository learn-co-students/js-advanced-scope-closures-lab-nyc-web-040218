function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){

    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let distance = Math.abs(end - start);
    let difference = (blockRange - distance);

    if (difference > 0){
      return (`within range by ${difference}`)
    }
    else {
      return (`${Math.abs(difference)} blocks out of range`)
    }
  }
}

function produceTipCalculator(percent){
  return function (fare){
    return fare * percent
  }
}
