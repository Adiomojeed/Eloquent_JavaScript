/**
 * Write a function deepEqual that takes two values and returns true only if they
    are the same value or are objects with the same properties, where the values
    of the properties are equal when compared with a recursive call to deepEqual .
 */
//function check (x, y) {
//    if ((Object.keys(x)[i] === Object.keys(y)[i])) {
//        return true
//    }
//    else {
//        return false
//    }
//}

function deepEqual (val1, val2) {
    let test = true
    if (typeof(val1) === 'object' && typeof(val2) === 'object' 
        && Object.keys(val1).length == Object.keys(val2).length) {
        for (let i = 0; i < Object.keys(val1).length; i++) {
            if (!test) break
            test = Object.keys(val1)[i] === Object.keys(val2)[i]
        }
        return test
    }

    else if (typeof(val1) !== 'object' && typeof(val2) !== 'object')
        if (val1 === val2) {
            return 'shoti yeee eeeh'
        }
        else {
            return 'laye kojoooo'
        }
        
    else {
        return false
    }
}

let x = {a: 1, b: 2}
let y = {a: 1, b: '2'}
console.log(deepEqual(x,y))
