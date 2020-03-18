/**
 * Define a recursive function isEven corresponding to this description. The
    function should accept a single parameter (a positive, whole number) and return
    a Boolean.
 */

function isEven ( value ) {
   if ( value === 0 ) {
       return true
   }
   else if ( value === 1 ) {
       return false
   }
   else if ( value > 0 ) {
       return isEven( value - 2)
   }
   else {
       return isEven ( value + 2 )
   }
} 

console.log(isEven(6)) // true
console.log(isEven(-63))  // false