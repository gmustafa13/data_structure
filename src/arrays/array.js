/**
 * declaration:
 * let arr = new Array(1,2....)
 * let arr = [1,2.....]
 * 
 * array length = array_name.length
 */

 /**
  * Array.form(array,callback)
  * 
  * this method convert a string into array of character.basically return a new array
  * e.g
  */

let tempString = 'gulam';
console.log(Array.from(tempString)); // out put : [ 'g', 'u', 'l', 'a', 'm' ]

let tempNumber = [1, 2, 3, 4]
console.log(Array.from(tempNumber, (x) => {return  (x + x) })); // [ 2, 4, 6, 8 ]

let set = new Set(['foo', 'bar', 'baz', 'foo']);
console.log(Array.from(set)) // [ 'foo', 'bar', 'baz' ]

/**
 * Array.isArray() this method used for to check whether its an array or not, it give true or false
 * 
 */

console.log(Array.isArray(tempNumber))// true
console.log(Array.isArray(tempString)) // false
 

/**
 * Array.of()
 * 
 * The Array.of() method creates a new Array instance from a variable number of arguments,
 *  regardless of number or type of the arguments.
 */


 console.log(Array.of(7),Array.of(1, 2, 3),Array(7),Array(1,2,3))
// [7]  , [1, 2, 3],array of 7 empty slots, [1, 2, 3]


/**
 * Array.concat()
 * 
 * The concat() method is used to merge two or more arrays. This method does not change the existing arrays,
 * but instead returns a new array.
 */

let temp = ['g', 'u', 'l', 'a', 'm'];
console.log(temp.concat(tempNumber)) // [ 'g', 'u', 'l', 'a', 'm', 1, 2, 3, 4 ]

/**
 * array.copyWithin();
 * arr.copyWithin(target[, start[, end]])
 * The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
 */

let array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));//["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));//["d", "d", "e", "d", "e"]

/**
 * array.entries()
 * return new array with key value pair
 */

let iterator1 = temp.entries();

console.log(iterator1.next().value); //[ 0, 'g' ]
console.log(iterator1.next().value); // [1,'u']

/**
 * array.every()
 * The every() method tests whether all elements in the array pass the test
 * implemented by the provided function. It returns a Boolean value.
 * 
 * if one of the does not satisfy condition it will return false
 */
let b = tempNumber.every((x) => {
  return x > 0
})
console.log("every", b)


/**
 * array.fill()
 * The fill() method changes all elements in an array to a static value, from a start
 * index (default 0) to an end index (default array.length). It returns the modified array
 */
console.log(tempNumber.fill(0, 2, 4)); //[ 1, 2, 0, 0 ]
console.log(tempNumber.fill(5, 1)); //[ 1, 5, 5, 5 ]
console.log(tempNumber.fill(6));//[ 6, 6, 6, 6 ]

/**
 * array.filter()
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 */
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let result = words.filter(word => word.length > 6);
console.log(result);


/**
 * array.find()
 * The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
 * it will return single object
 */
let findArray = [1,5,7,8,9,10,50]
let found = findArray.find(element => element >10);
console.log(found);

/**
 * array.findIndex()
 * method returns the index of the first element in the array
 */
let indexArray = [1, 5, 7, 8, 9, 10, 50]
let indexFound = indexArray.findIndex((single) => { return single == 8 })
console.log("index", indexFound)


/**
 * flat()
 * this return new array,with all sub-array elements concatenated into it
 * 
 * array.flatMap() is same as arr but it have callback function too.
 */
let arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());  give error flat not a function


/**
 * join()
 * The join() method creates and returns a new string by concatenating all of the elements in an array
 */

let elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());// expected output: "Fire,Air,Water"
console.log(elements.join(''));// expected output: "FireAirWater"
console.log(elements.join('-'));// expected output: "Fire-Air-Water"