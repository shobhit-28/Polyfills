let nameObj = {
    firstName: "Shobhit",
    lastName: "Raj"
}

const printName = function () {
    console.log(`${this.firstName} ${this.lastName}`)
}

Function.prototype.myBind = function(...args) {
    const obj = this
    const params = args.slice(1)
    return function (...internalArgs) {
        obj.apply(args[0], [...params, ...internalArgs])
    }
}
let printMyName = printName.myBind(nameObj)

printMyName()

function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Shobhit" };

const sayHi = greet.myBind(person, "Hi");
sayHi("!");