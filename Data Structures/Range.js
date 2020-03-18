/**
 * Write a range function that takes two arguments, start and end , and returns
    an array containing all the numbers from start up to (and including) end .
 */

function range (start, end, step) {
    let arr = []
    if (step > 1) {
        for (let i = start; i <= end; i+=step) {
            arr.push(i)
        }
    }
    else if (step < 1) {
        for (let i = start; i >= end; i--) {
            arr.push(i)
        }
    }
    else {
        for (let i = start; i <= end; i++) {
            arr.push(i)
        }
    }
    return arr
}

console.log(range(5,20,5)) // Returns [ 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

function sumOfArray (x) {
    let sum = 0
    for (let j = 0; j <= x.length; j++) {
        sum += j
    }
    return sum
}

console.log(sumOfArray([1,2,3,4,5,6,7,8,9,10]))