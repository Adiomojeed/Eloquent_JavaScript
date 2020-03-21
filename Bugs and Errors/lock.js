/**
 * Write a function called withBoxUnlocked that takes a function value as ar-
gument, unlocks the box, runs the function, and then ensures that the box
is locked again before returning, regardless of whether the argument function
returned normally or threw an exception.
 */

const box = {
    locked: true,
    unlock() { 
        return this.locked = false; 
    },
    lock() { 
        return this.locked = true; 
    },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked (fn) {
    let locked = box.locked
    if (!locked) {
        return fn()
    }

    box.unlock()
    
    try {
        return fn()
    } finally {
        box.lock()
    }

}

withBoxUnlocked(function() {
    box.content.push('hello')
})

try {
    withBoxUnlocked(function(){
        throw new Error("Box is locked")
    })
} catch (error) {
    console.log(error)
}

console.log(box.locked)