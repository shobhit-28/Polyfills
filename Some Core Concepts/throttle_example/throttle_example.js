let counter = 0

function onClick() {
    console.log(counter++)
}

function throttleFunc(func, delay) {
    let flag = true
    return function () {
        let context = this;
        let args = arguments
        if (flag) {
            func.apply(context, args)
            flag = false
            setTimeout(() => {
                flag = true
            }, delay)
        }
    }
}

const getThrottledClick = throttleFunc(onClick, 200)