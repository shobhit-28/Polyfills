function checkConn() {
    console.log('Hey')
}

let counter = 0;

function onInput(event) {
    console.log(`${event.target.value} ${counter++}`)
}

function debounce(func, delay) {
    let timer = null;
    return function () {
        let context = this;
        let args = arguments
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args)
        }, delay)
    }
}

const callDebouncedInput = debounce(onInput, 300)