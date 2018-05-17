function produceDrivingRange(blockRance) {
  return function(start1,end1){
    let start = parseInt(start1)
    let end = parseInt(end1)
    let distance = Math.abs(end-start)
    let difference = blockRance - distance
    if( difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}
function produceTipCalculator(total) {
  return function(tip){
    return total * tip
  }

}
function createDriver(){
  let driverId= 0
  return class Driver{
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
