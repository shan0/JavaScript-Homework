function substrCount(keyword, text) {
    var substrings = text.split(keyword);
    return substrings.length;
}

console.log(substrCount('in', "We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days."));
console.log(substrCount('your', "No one heard a single word you said. They should have seen it in your eyes. What was going around your head."));
console.log(substrCount('but', "But you were living in another world tryin' to get your message through."))