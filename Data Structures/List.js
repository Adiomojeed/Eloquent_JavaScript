/**
 * Write a function arrayToList that builds up a list structure like the one
    shown when given [1, 2, 3] as argument.
 */

function arrayToList (x) {
    let list = null
    // x.forEach(a => s[] = a)
    for (let i = x.length - 1; i >= 0; i--) {
        list = {value: x[i], rest: list}
    } 
    return list
}

console.log(arrayToList([1,2,3,4,5]))