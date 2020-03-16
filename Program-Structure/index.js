/**
 * Looping a triangle
   Write a loop that makes seven calls to console.log to output the following
   triangle:
 */

 let i = 0
 var hash = ''
for ( i; i < 7; i++ ) {
    hash += '#'
    console.log(hash)
}

/**
 * Write a program that uses console.log to print all the numbers from 1 to 100,
   with three exceptions. For numbers divisible by 3, print "Fizz" instead of the
   number, for numbers divisible by 5 (and not 3), print "Buzz" instead and print 
   "FizzBuzz" , for numbers that are divisible by both 3 and 5
 */

 for ( let counter = 1; counter <= 100; counter++ ) {
    if ( counter % 3 === 0 && counter % 5 === 0 ) {
        console.log('FizzBuzz')
    }
    else if (counter % 3 === 0) {
        console.log('Fizz')
    }
    else if (counter % 5 === 0) {
        console.log('Buzz')
    }
    else {
        console.log(counter)
    }
 }

 /**
  * Write a program that creates a string that represents an 8×8 grid, using newline
    characters to separate lines. At each position of the grid there is either a space
    or a "#" character. The characters should form a chess board.
  */

let x = ''
for ( let i = 0; i < 8; i++ ) {
    for ( let j = 0; j < 8; j++ ) {
        if ( (i + j) % 2 !== 0 ) {
            x += ' '
        }
        else {
            x += '#'
        }
    }
    x += '\n'
}
console.log(x)