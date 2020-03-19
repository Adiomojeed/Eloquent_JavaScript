/**
 * Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original arrays.
 */

function flattenArray (array) {
    let newArray = array.reduce((present, next) => {
        return present.concat(next)
    }, [])
    return newArray
}

flattenArray([[1,2,3], [4,5,6], [7,8,9]])  // Returns [1, 2, 3, 4, 5, 6, 7, 8, 9]