const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// a.forEach((e, i, n) => console.log(e, i, n))

Array.prototype.forEachPolyFill = function (callBack) {
    for (let index = 0; index < this.length; index++) {
        if (this.hasOwnProperty(index)) {
            callBack(this[index], index, this)            
        }
    }
}

a.forEachPolyFill((e, i, n) => console.log(e, i, n))
a.forEachPolyFill((e, i) => console.log(e, i))
a.forEachPolyFill((e) => console.log(e))