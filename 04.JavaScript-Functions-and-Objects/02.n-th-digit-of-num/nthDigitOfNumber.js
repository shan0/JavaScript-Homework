function getNthDigit(n, number) {
   return Math.floor(Math.abs(((number / Math.pow(10, n - 1)) % 10)));

}

console.log(getNthDigit(1, 6));
console.log(getNthDigit(-55, 2));
console.log(getNthDigit(6, 923456));
console.log(getNthDigit(6, 888.88))
