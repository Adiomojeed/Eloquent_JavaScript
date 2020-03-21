/**
 * Write a class called Group (since Set is already taken). Like Set , it has add ,
delete , and has methods. Its constructor creates an empty group, add adds
a value to the group (but only if it isn’t already a member), delete removes
its argument from the group (if it was a member), and has returns a Boolean
value indicating whether its argument is a member of the group.
 */

class Group {
    constructor (array) {
        this.arr = array
    }

    add (x) {
        let newArr = this.arr
        if (newArr.includes(x)) {
            newArr.push(x)
            newArr.pop(x)
            return newArr
        }
        else {
            newArr.push(x)
            return newArr
        }
    }

    delete (y) {
        let aws = this.arr.filter(a => a != y)
        this.arr = [...aws]
        return this.arr
    }

    has (z) {
        return this.arr.includes(z)
    }

    static from (obj) {
        let group = new Group([])
        for (let x of obj) {
            group.add(x)
        }
        return group
    }
}



let group = Group.from([])
console.log(group.add(20))
console.log(group.add(10))
console.log(group.add(10))
// console.log(group.delete(10))

