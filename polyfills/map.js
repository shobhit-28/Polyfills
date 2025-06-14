const a = [1, , , , 2, 3, 4, 5, 6, 7, 8, 9]

console.log(a.map((num, i) => num * i))

Array.prototype.mapPolyFill = function (callBack) {
    const returnArr = new Array(this.length);
    for (let index = 0; index < this.length; index++) {
        if (this.hasOwnProperty(index)) {
            returnArr[index] = callBack(this[index], index, this)
        }
    }
    return returnArr
}

console.log(a.mapPolyFill((num, i) => num * i))