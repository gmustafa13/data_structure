/**
 * A priority queue is an ordered list of elements where 
 * an element is inserted according to the priority queue and is removed from the front of the queue.
 */

var priorityQueue = function () {
    var collection = [];

    this.print = function () {
        return collection
    }

    this.enqueue = function (element, priority) {

        let tempObj = {};
        tempObj.element = element;
        tempObj.priority = priority

        let isContain = false
        /**
         * you can use push() method instead traditional way
         */


        // checking priority if any

        for (let i = 0; i <= collection.length - 1; i++) {
            if (collection[i].priority > priority) {
                collection.splice(i, 0, tempObj)
                isContain = true;
                break;
            }
        }

        if (!isContain) {
            collection.push(tempObj)
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

let gulam = new priorityQueue();
gulam.enqueue("hi", 1)
gulam.enqueue("hello", 3)
gulam.enqueue("how are u", 2)
gulam.enqueue("hi kk", 3)


console.log("priority===", gulam.print(),gulam.dequeue())