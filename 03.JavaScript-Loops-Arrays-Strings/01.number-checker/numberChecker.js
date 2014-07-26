function printNumbers(n) {
    for(var i = 2; i <= n; i++) {
        if((i % 4 != 0) && (i % 5 != 0)) {
           console.log(i);
        }
    }
}
console.log(printNumbers(20));
console.log(printNumbers(1));
console.log(printNumbers(13));