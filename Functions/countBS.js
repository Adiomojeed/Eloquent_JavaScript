/**
 * Write a function countBs that takes a string as its only argument and returns
    a number that indicates how many uppercase “B” characters there are in the
    string.
 */

function countBs ( value ) {
    return countChar(value, 'b')
}

console.log(countBs('BBBrsxczfz'))

function countChar ( value, cond ) {
    var count = 0
    for ( var i = 0; i < value.length; i++ ) {
        if ( value[i] == cond.toUpperCase() ) {
            count += 1
        }
    }
    return count
}

console.log(countChar('rfFDKBBxxg', 'D'))