const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    
    for (let i = 0; i < expr.length; i += 10) {
        arr = arr.concat(expr.slice(i, (10 + i)).split())
    }

    let arrFilter = []

    for (let j = 0; j < arr.length; j++) {
        arrFilter = arrFilter.concat(arr[j].replaceAll('00', '').replaceAll('10', '.').replaceAll('11', '-'))
    }

    let arrMorse = Object.keys(MORSE_TABLE)

    for (let k = 0; k < arrMorse.length; k++) {
        for (let m = 0; m < arrFilter.length; m++) {
            if (arrFilter[m] === arrMorse[k]) {
                arrFilter[m] = MORSE_TABLE[arrMorse[k]]
            } else if (arrFilter[m] === '**********') {
                arrFilter[m] = ' '
            }
        }
    }

    let result = arrFilter.join('');

    return result;
}

module.exports = {
    decode
}