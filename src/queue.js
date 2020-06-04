/**
 * A queue is an ordered list of elements where 
 * an element is inserted at the end of the queue and is removed from the front of the queue.
 */

var queue = function () {
    var collection = [];

    this.print = function () {
        return collection
    }

    this.enqueue = function (element) {
        /**
         * you can use push() method instead traditional way
         */

        // collection.push(element)

        //or 
        if (collection.length === 0) {
            collection[0] = element
        } else {
            collection[collection.length] = element
        }
    }

    this.dequeue = function () {

        /**
         * you can use shift() method for removing element instead traditional way
         */

        // return collection.shift();

        let tempArry = [];

        for (let i = collection.length - 2; i >= 0; i--) {  //remove last index object
            tempArry[i] = collection[i]
        }
        collection = tempArry; // update collection
        return collection
    }

    this.front = function () {
        return collection[0];
    }

    this.size = function () {
        return collection.length;
    }

    this.isEmpty = function () {
        return (collection.length === 0);
    }
}

let gulam = new queue();
gulam.enqueue(1);
gulam.enqueue(5);
gulam.enqueue(4);
gulam.enqueue(1);
gulam.dequeue();
console.log("collection ", gulam.print())
console.log("isEmpty ",gulam.isEmpty())