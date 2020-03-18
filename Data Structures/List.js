/**
 * Write a function arrayToList that builds up a list structure like the one
    shown when given [1, 2, 3] as argument.
 */

function arrayToList (x) {
    var list = {y: 'a'}
    for (let i = 0; i <= x.length; i++) {
        Object.assign(list, {i})  
    }
    return list
    
}
console.log(arrayToList([1,2,3,4]))
var x = {'a': 1, 'b': 2}
console.log(typeof(x))