const a = [1, , , , 2, 3, 4, 5, 6, 7, 8, 9]

console.log(a.filter((num, i) => num % 2 && i > 2))

Array.prototype.myFilter = function (callBack) {
    const returnArr = []
    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            if (callBack(this[i], i, this)) {
                returnArr.push(this[i])
            }            
        }
    }
    return returnArr
}

console.log(a.myFilter((num, i) => num % 2 && i > 2))