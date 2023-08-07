

function distanceFromHqInBlocks(pickupLocation){
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation)
    
}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const traveled = Math.abs(destination - start);
    return traveled * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const feetTraveled = distanceTravelledInFeet(start, destination);

    if (feetTraveled <= 400) {
        return 0;
    } else if (feetTraveled > 400 && feetTraveled < 2000) {
        return (feetTraveled - 400) * 0.02;
    } else if (feetTraveled > 2000 && feetTraveled < 2500) {
        return 25;
    } else if (feetTraveled >= 2500) {
        return 'cannot travel that far';
    }
}





console.log(distanceFromHqInBlocks(43))
console.log(distanceFromHqInBlocks(50))
console.log(distanceFromHqInBlocks(34))

console.log(distanceFromHqInFeet(43))
console.log(distanceFromHqInFeet(50))
console.log(distanceFromHqInFeet(34))

console.log(distanceTravelledInFeet(43, 48))
console.log(distanceTravelledInFeet(50, 60))
console.log(distanceTravelledInFeet(34, 28))

console.log(calculatesFarePrice(43, 44))
console.log(calculatesFarePrice(34, 32))
console.log(calculatesFarePrice(50, 58))
console.log(calculatesFarePrice(34, 24))