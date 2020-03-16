/**
 * Write a function that takes two arguments and returns their minimum.
 */

function minimum (a, b) {
    if ( a < b ) {
        return a
    }
    else {
        return b
    }
}

minimum (4, 8)  // Returns 4
minimum (43, 6)  // Returns 6
minimum(4, -10)  // Returns -10