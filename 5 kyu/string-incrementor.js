function incrementString(str) {
    const num = str.match(/\d*$/)[0]
    if (!!!num) return str + "1"
    return str.replace(/\d*$/, `${+num + 1}`.padStart(num.length, 0))
}