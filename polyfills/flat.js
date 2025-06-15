const a = [1, , , , 2, 3, 4, { a: 'a' }, [5, , , , [6, 7, { a: 'd' }]]]

console.log(a.flat())

Array.prototype.myCustomFlatFunc = function () {
    const returnArr = []

    for (let index = 0; index < this.length; index++) {
        if (this.hasOwnProperty(index)) {
            if (Array.isArray(this[index])) {
                for (let subIndex = 0; subIndex < this[index].length; subIndex++) {
                    if (this[index].hasOwnProperty(subIndex)) {
                        returnArr.push(this[index][subIndex])
                    }
                }
            } else {
                returnArr.push(this[index]);
            }
        }
    }
    return returnArr
}

console.log(a.myCustomFlatFunc())