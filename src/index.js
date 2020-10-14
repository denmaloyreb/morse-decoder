const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    function split(text) {
        return text.match(/.{1,2}/g);
    }

    let arrStr = split(expr);
    let resultArr = new Array();


    for (let i = 0; i < arrStr.length; i++) {

        if (arrStr[i] === "00") {
            resultArr.push(' ')
        }
        if (arrStr[i] === "**") {
            resultArr.push('*')
        }
        if (arrStr[i] === "10") {
            resultArr.push('.')
        }
        if (arrStr[i] === "11") {
            resultArr.push('-')
        }

    }

    let newResult = resultArr.join('');

    function splitSecond(znak) {
        return znak.match(/.....?/g);
    }

    let newArrStr = splitSecond(newResult);

    for (i = 0; i < newArrStr.length; i++) {
        newArrStr[i] = newArrStr[i].trim();
    }

    let phrase = new Array();
    for (i = 0; i < newArrStr.length; i++) {
        phrase.push(MORSE_TABLE[newArrStr[i]]);
    }

    for (i = 0; i < phrase.length; i++) {
        if (phrase[i] === undefined) {
            phrase[i] = ' ';
        }
    }

    return (phrase.join(''));

}

module.exports = {
    decode
}