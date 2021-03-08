function numberDoubler(num) {
    while (num < 100) {
        num = num * 2;
    }
    return num
}

function stringRepeater(str) {
    let outputStr = str;
    while (outputStr.length < 10) {
        outputStr += str;
    }
    return outputStr;
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