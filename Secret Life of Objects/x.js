function xyz () {
    this.name = 'mojeed'
}

xyz.prototype.sayHi = function () {
    console.log('Hello')
}
let sw = new xyz()

console.log(sw.__proto__)
console.log(Object.getPrototypeOf(sw).constructor)

class Temperature {
    constructor(celsius) {
        this.celsius = celsius
    }
    get fahrenheit () {
        return this.celsius * 1.8 + 32
    }
    set fahrenheit (value) {
        this.celsius = (value - 32) / 1.8
    }
}

let temp = new Temperature(22)
console.log(temp.fahrenheit)
temp.fahrenheit = 86
console.log(temp.celsius)