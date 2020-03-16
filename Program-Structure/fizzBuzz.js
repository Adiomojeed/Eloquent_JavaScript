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
