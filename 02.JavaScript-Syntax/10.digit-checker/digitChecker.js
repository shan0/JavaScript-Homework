function checkDigit(value) {
    value /= 100;
    value %= 10;
    value = parseInt(value);
    return value == 3 ? true : false;
}
console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));