function convertDigitToWord(input) {
    switch(input) {
        case 0: return "zero"; break;
        case 1: return "one"; break;
        case 2: return "two"; break;
        case 3: return "three"; break;
        case 4: return "four"; break;
        case 5: return "five"; break;
        case 6: return "six"; break;
        case 7: return "seven"; break;
        case 8: return "eight"; break;
        case 9: return "nine"; break;
        case 10: return "ten"; break;
    }
}

console.log(convertDigitToWord(8));
console.log(convertDigitToWord(3));
console.log(convertDigitToWord(5));