/**
 * problem statement;
 * let you have two array a and b, a have array of string b, also have same, 
 * you have to find any combination of word of array a in array b. and print the count
 * 
 * e.g 
 * a =['abc','gfh'....]
 * b =['abc','bca','cba'....,'ghf']
 * 
 * output:[3,1]
 */
let a = ["gulam", "zara", "ali", "suraj"]
let b = ["gulam", "malug", "lamgu", 'zara', "zaar", 'arza', "ali"]

let gulam = async (a, b) => {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let count = 0;
    let sortedChar = await splitAndSort(a[i]);
    for (let j = 0; j < b.length; j++) {
      let sortedCharInside = await splitAndSort(b[j]);
      if (sortedChar == sortedCharInside) {
        count += 1
      }
    }
    result.push(count);
  }
  return result
}
(async () => {
  let result = await gulam(a, b);
  console.log("final - result", result)
})()


async function splitAndSort(data) {
  let tempCharArray = data.split("").sort();
  let tempChar = ''
  for (let i = 0; i < tempCharArray.length; i++) {
    tempChar += tempCharArray[i];
  }
  return tempChar;
}

// let findPermutations = (string) => {
//     if (!string || typeof string !== "string"){
//       return "Please enter a string"
//     } else if (string.length < 2 ){
//       return string
//     }

//     let permutationsArray = [] 

//     for (let i = 0; i < string.length; i++){
//       let char = string[i]

//       let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
//       for (let permutation of findPermutations(remainingChars)){
//         permutationsArray.push(char + permutation) }
//     }
//     return permutationsArray
//   }

//   console.log(findPermutations('gulam'))
/**
 * validate brackets
 */

function brackets(str){
  let stack = [];
  let map = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  for(let i =0; i< str.length ; i++){
      if(str[i] == '(' || str[i] == '{' || str[i] == '['){
          console.log("in if")
          stack.push(str[i]);
      }else if(str[i] == ')' || str[i] == '}' || str[i] == ']'){
          console.log("in else")
        let last =  stack.pop(str[i]); // if end brackets found pop from stack

          // match pop element with map obj if found then its true else false
         if(str[i] !== map[last]){
             return false
          }
 
      }
  }
  // after looping if any element is left then its false else true

  if(stack.length !== 0){
      return false
  }else{
      return true
  }
}
console.log("ggg",brackets('[(5+2)*(5+2)]'))