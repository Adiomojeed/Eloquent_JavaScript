/**
 * Write a function deepEqual that takes two values and returns true only if they
    are the same value or are objects with the same properties, where the values
    of the properties are equal when compared with a recursive call to deepEqual .
 */


function deepEqual (val1, val2) {
    let test = true
    if (typeof(val1) === 'object' && typeof(val2) === 'object' 
        && Object.keys(val1).length == Object.keys(val2).length) {
        for (let i = 0; i < Object.keys(val1).length; i++) {
            if (!test) break
            var newVal1 = Object.values(val1)[i]
            var newVal2 = Object.values(val2)[i]
            if (typeof(newVal1) === 'object' && typeof(newVal2) === 'object') {
                return deepEqual(newVal1, newVal2)
            }
            test = Object.keys(val1)[i] === Object.keys(val2)[i] && newVal1 === newVal2
        }
        return test
    }

    else if (typeof(val1) !== 'object' && typeof(val2) !== 'object') {
        if (val1 === val2) {
            return 'shoti yeee eeeh'
        }
        else {
            return 'laye kojoooo'
        }
    }    
    else {
        return false
    }
}

let x = {a: 1, b: 2, c: { a: 2, b: 3}}
let y = {a: 1, b: 2, c: { a: 2, b: 3}}
console.log(deepEqual(x,y))
