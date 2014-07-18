function calcSupply(age, maxAge, foodPerDay) {
    var ageBetween = maxAge - age;
    var result = ageBetween * (foodPerDay * 365).toFixed(2);

    return result + "kg of chocolate would be enough untill I am " + maxAge + " years old.";
}

console.log(calcSupply(38, 118, 0.5));
console.log(calcSupply(20, 87, 2));
console.log(calcSupply(16, 102, 1.1));