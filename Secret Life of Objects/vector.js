/**
 * Write a class Vec that represents a vector in two-dimensional space. It takes
x and y parameters (numbers), which it should save to properties of the same
name. Give the Vec prototype two methods, plus and minus , that take another
vector as a parameter and return a new vector that has the sum or difference
of the two vectors’ ( this and the parameter) x and y values. Add a getter p
roperty length to the prototype that computes the length of the vector—that is, 
the distance of the point (x, y) from the origin (0, 0).
 */

class Vec {
    constructor (x, y) {
        this.x = x
        this.y = y
    }

    plus (a, b) {
        return (`Vec{x : ${this.x + a}, y : ${this.y + b}}`)
    }

    minus (c, d) {
        return (`Vec{x : ${this.x - c}, y : ${this.y - d}}`)
    }
    
    get length () {
        return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)))
    }
}

new Vec(1, 2).minus(2, 3) // Returns Vec {x : -1, y : -1}
new Vec(3, 4).length //Returns 5