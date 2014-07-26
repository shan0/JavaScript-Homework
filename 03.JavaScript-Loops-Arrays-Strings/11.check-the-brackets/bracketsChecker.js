function isBalanced(code) {
    var length = code.length;
    var delimiter = '';
    var bracket = [];
    var matching = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (var i = 0; i < length; i++) {
        var char = code.charAt(i);

        switch (char) {
            case '"':
            case "'":
                if (delimiter)
                    if (char === delimiter)
                        delimiter = '';
                    else delimiter = char;
                break;
            case '/':
                var lookahead = code.charAt(++i);
                switch (lookahead) {
                    case '/':
                    case '*':
                        delimiter = lookahead;
                }
                break;
            case '*':
                if (delimiter === '*' && code.charAt(++i) === '/') delimiter = '';
                break;
            case '\n':
                if (delimiter === '/') delimiter = '';
                break;
            case '\\':
                switch (delimiter) {
                    case '"':
                    case "'":
                        i++;
                }
                break;
            case '(':
            case '[':
            case '{':
                if (!delimiter) bracket.push(char);
                break;
            case ')':
            case ']':
            case '}':
                if (!delimiter && bracket.length && matching[char] !== bracket.pop())
                    return false;
        }
    }

    return bracket.length ? "incorrect" : "correct";
}

console.log(isBalanced('( ( a + b ) / 5 – d )'));
console.log(isBalanced(') ( a + b ) )'));
console.log(isBalanced('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));