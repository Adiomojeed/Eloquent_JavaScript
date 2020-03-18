/**
 * takes an array as argument
    and produces a new array that has the same elements in the inverse order
 */

function reverseArray (arr) {
    var newArr = arr.reverse().join('').split('')
    return newArr
}

reverseArray ([2,3,45,1,3,4]) // Returns [4,3,1,45,3,2]


/**
 * reverseArrayInPlace , does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.
 */

function reverseArrayInPlace (arr) {
    var newArr = []
    for (let i = arr.length; i >= arr[0]; i--) {
        newArr.push(i)
    }
    return newArr
}

reverseArrayInPlace([1,2,3,4,5,6,7]) // Returns [7,6,5,4,3,2,1]