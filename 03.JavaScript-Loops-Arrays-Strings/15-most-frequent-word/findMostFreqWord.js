function findMostFreqWord(str) {
    var wordCounts = [];
    var words = str.split(/\s/);

    for (var i = 0; i < words.length; i++) {
        wordCounts[words[i].toLowerCase()] = (wordCounts[words[i]] || 0) + 1;

    }

    console.log(wordCounts);
}

findMostFreqWord("in the middle of the night");
findMostFreqWord("Welcome to SoftUni. Welcome to Java. Welcome everyone.");
findMostFreqWord("Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.")