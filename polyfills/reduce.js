const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(a.reduce((acc, curr, i, b) => acc + curr + i + (i % 2 ? b[0] : b[1])))

Array.prototype.myCustomReduce = function (callBack, initialValue) {
    const hasInitialVal = arguments.length > 1
    let element;
    let index

    if (hasInitialVal) {
        element = initialValue;
        index = 0
    } else {
        index = 0;
        while (index < this.length && !(index in this)) {
            index++;
        }
        if (index >= this.length) {
            throw new Error("Reduce cannot be applied on empty arrays");
        }
        element = this[index++]
    }

    for (; index < this.length; index++) {
        element = callBack(element, this[index], index, this)
    }
    return element
}

console.log(a.myCustomReduce((acc, curr, i, b) => acc + curr + i + (i % 2 ? b[0] : b[1])))