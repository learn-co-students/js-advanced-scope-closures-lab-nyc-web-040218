function produceDrivingRange(range){
  return (a,b) => {
    start = parseInt(a.slice(0,-2));
    end = parseInt(b.slice(0,-2));
    result = range - (end - start )
    if (result < 0){
      return (result*-1)+ ' blocks out of range'
    }
    else{
      return 'within range by ' + result
    }
  }
}

function produceTipCalculator(percent){
  return (fare) => {
    return fare * percent
  }
}


let createDriver = () => {
  id = 0;
  return class Driver{
    constructor(name){
      this.name = name;
      this.id = id;
      id++;
    }

  }

  // (name) => {
  //   alert("hi")
  //   let a = new Driver(name)
  //   id++;
  //   return a
  // }
};
