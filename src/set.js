/**
 * in es-6 set is already implemented has a key word set();
 */
/**
 * set work as a same stack but it will same unique element only
 */
function mySet() {
    var collection = [];

    // check for is element exist or not
    this.has = function (element) {
        if (collection.indexOf(element) !== -1) {
            return false
        } else {
            return true
        }
    }

    this.value = function () {
        return collection;
    }
    // this method add element into array
    this.add = function (element) {
        if (this.has(element)) {
            collection.push(element);
            return true
        } else {
            return false
        }
    }
    // this method remove an element from array
    this.remove = function (element) {
        if (this.has(element)) {
            let index = collection.indexOf(element)
            collection.splice(index, 1);
            return true
        } else {
            return false
        }
    }

    // this method return size of collection
    this.size = function () {
        return collection.length;
    }

    // this method join set a and set b 

    this.union = function (setB) {
        let _union = new mySet()
        let firstSet = this.value();
        let otherSet = setB.value();
        for (let elem of firstSet) {
            _union.add(elem)
        }
        for (let element of otherSet) {
            _union.add(element)
        }
        return _union.value();
    }

    this.intersection = function (setB) {
        let _intersection = new mySet()
        let firstSet = this.value();
        for (let elem of firstSet) {
            if (!setB.has(elem)) {
                _intersection.add(elem)
            }

        }
        return _intersection.value();
    }
}


let gulam = new mySet();
let mustafa = new mySet();

gulam.add(1)
gulam.add(2)
gulam.add(4)
gulam.add(2)

mustafa.add(9)
mustafa.add(8)
mustafa.add(7)
mustafa.add(2)

console.log("set a", gulam.value())
console.log("set b", mustafa.value())
let a = gulam.union(mustafa)
let b = gulam.intersection(mustafa)

console.log("union", a,b)