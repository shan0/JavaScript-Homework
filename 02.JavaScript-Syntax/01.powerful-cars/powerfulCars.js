function convertKWtoHP(kwH) {
   return kwH + (kwH * 0.3410220888);
}
console.log(parseFloat(convertKWtoHP(75).toFixed(2)));
console.log(parseFloat(convertKWtoHP(150).toFixed(2)));
console.log(parseFloat(convertKWtoHP(1000).toFixed(2)));