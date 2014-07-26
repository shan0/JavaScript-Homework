function reverseWordsInString(input) {
    return input.split("").reverse().join("").split(" ").reverse().join(" ");
}

console.log(reverseWordsInString("Hello, how are you."));
console.log(reverseWordsInString("Life is pretty good, isn’t it?"));
