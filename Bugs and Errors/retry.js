/**
 * Say you have a function primitiveMultiply that, in 20 percent of cases, multiplies 
    two numbers, and in the other 80 percent, raises an exception of type
    MultiplicatorUnitFailure . Write a function that wraps this clunky function
    and just keeps trying until a call succeeds, after which it returns the result.
 */

function primitiveMultiply (a, b) {
    let x = Math.floor(Math.random()*100)
    if (x < 20) {
        return (`${a * b} succeeded at ${x}%`)
    }
    else {
        throw new Error(`MultiplicatorUnitFailure: ${x}% > 20%`)
    }
}

for (;;) {
    try {
        console.log(primitiveMultiply(5, 10))
        
        break
    }
    catch (error) {
        console.log(error)
    }
}