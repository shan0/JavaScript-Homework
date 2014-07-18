function sumNumbers(value) {
    var remainder = value % 10;
    var sum = remainder;
    if (value >= 10) {
        var rest = Math.floor(value / 10);
        sum += sumNumbers(rest);
    }
    return sum;
}
var result = (sumNumbers(12)) % 3 == 0 ? "the number is divided by 3 without remainder" : "the number is not divided by 3 without remainder";
var secondResult = (sumNumbers(189)) % 3 == 0 ? "the number is divided by 3 without remainder" : "the number is not divided by 3 without remainder";
var thirdResult = (sumNumbers(591)) % 3 == 0 ? "the number is divided by 3 without remainder" : "the number is not divided by 3 without remainder";
console.log(result);
console.log(secondResult);
console.log(thirdResult);