function produceDrivingRange(blockRange){
    return function(start, end){
        let distance = Math.abs(parseInt(start) - parseInt(end));
        let compare = blockRange - distance;
        if (compare > 0){
            return `within range by ${compare}`
        }else{
            return `${Math.abs(compare)} blocks out of range`
        }
    }
}

function produceTipCalculator(percent){
    return function(amount){
        return (amount * percent);
    }
}

function createDriver(){
    let driverId = 0;
    return class {
        constructor(name){
            this.name = name;
            this.id = ++driverId;
        }
    }
}