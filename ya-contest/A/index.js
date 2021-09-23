module.exports = function (str, symbol) {
    let result = 0;
    for (let strSymbol of str) {
        strSymbol === symbol && result++;
    }

    return result;
}
