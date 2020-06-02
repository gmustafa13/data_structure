/**
 * palindrome example which is used stack data structure
 */

var letters = [] // this is stack
var word = "gmustafa";
var rword = "" // reverse word

/**
 * put latter of word into stack 
 */

for (let i = 0; i <= word.length - 1; i++) {
    letters.push(word[i])
}


/**
 * reverse word
 */

for (let j = letters.length - 1; j >= 0; j--) {
    rword += letters[j]
}
/**
 * instead of traditional for loop you can use array.reverse()  method
 */

if (rword === word) {
    console.log("given word is palindrome")
} else {
    console.log("given word is not palindrome")
}