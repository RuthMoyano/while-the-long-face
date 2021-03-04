function numberDoubler(num) {
    while (num < 100) {
        num = num * 2;
    }
    return num
}

function stringRepeater(str) {
    while (str.length < 10) {
        str += str;
    }
    return str;
}

function makeDivisible(x, y) {
    let outputX = x;
    while (outputX % y !== 0) {
        outputX++;
    }
    return outputX;
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};