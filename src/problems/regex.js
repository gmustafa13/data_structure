/**
 * minimum 4 character it should be between 4-25
 * start with any letter 
 * not end with _
 */

function CodelandUsernameValidation(str) { 
    let regex = /^[a-zA-Z]+([\d\D]*)+[^_]$/g
    // code goes here  
    if(str.length > 4 && str.length < 26 && str.match(regex) ){
    return true; 
    }else{
      return false
    }
  
  }
     
  // keep this function call here 
  // console.log(CodelandUsernameValidation("gula!234"));

  /**
   * longest word in an array not included special character.
   */
  function LongestWord(sen) { 
   sen = sen.trim();
   sen = sen.replace(/[^a-zA-Z0-9 ]/g, '');
   
   let longest = ""
 
   let tempArr = sen.split(" ").forEach(word => {
       if(word.length > longest.length) longest = word;
   })
 
   return longest;
 
 }
    
 // keep this function call here 
//  console.log(LongestWord(readline()));

 /**
  * problem statement
  * 
  * brackets validation
  * e.g '({[})' give false
  * ({[]}) give true
  */

let bracketsValidation = async (text) => {
  let regex1 = /\[([^\]]+)]/;
  let regex2 = /\(([^)]+)\)/;
  let regex3 = /\{([^}]+)}/;
  if (regex1.test(text) && regex2.test(text) &&  regex3.test(text)) {
    return true
  }

  // let tempArr = text.split("")
  // let testingRegex = async ()=>{
  //   let a = await Promise.all([regex1.test(text) ,regex2.test(text) , regex3.test(text)]).then((result)=>{
  //     return result
  //   })

  //   // if (tempArr.includes("(") && tempArr.includes("[") && tempArr.includes("{")) {
  //   //   if (regex1.test(text) && regex2.test(text) &&  regex3.test(text)) {
  //   //     return true
  //   //   }else {
  //   //     return false
  //   //   }
  //   // }else if(tempArr.includes("(") && tempArr.includes("[")){
  //   //   if (regex1.test(text) && regex2.test(text)) {
  //   //     return true
  //   //   }else {
  //   //     return false
  //   //   }
  //   // }
  // }

}
// ( async function(){
//     console.log( await bracketsValidation("{([})]}"))
//   }
// )()

/**
 * calculator
 */

let calculator = async (string) => {
  let tempArr = string.split("")
  let number = 0;
  let matchFunction = async(matched,text)=>{
    let subGroup = matched[2];
    number = subGroup.split("")[0];
    let tempNum = await subGroup.split("").forEach((char,index)=>{
      if(char == '+'){
      number += subGroup[index+1]
      }else if(char == '-'){
        number -= subGroup[index+1]
      }else if(char == "*"){
        number *= subGroup[index+1]
      }else if(char == '/'){
        number *= subGroup[index+1]
      }
    })
    let newString = string.replace(regex,number);
  }
  if(tempArr.includes("(")||tempArr.includes("+") ||tempArr.includes("-") ||tempArr.includes("*") ||tempArr.includes("/")){
    console.log("in if",string)
    let regex = /((?:\(([^(^)].*?)\))+)/
    let match = string.match(regex); 
    let notInclude;
    if(match[0].split("").includes("(")){
      match[0].match(regex)
    }else{
      let subGroup = match[2];
      number = subGroup.split("")[0];
      console.log("match",match,number)
      let tempNum = await subGroup.split("").forEach((char,index)=>{
        if(char == '+'){
        number += subGroup[index+1]
        }else if(char == '-'){
          number -= subGroup[index+1]
        }else if(char == "*"){
          number *= subGroup[index+1]
        }else if(char == '/'){
          number *= subGroup[index+1]
        }
      })
      let newString = string.replace(regex,number);
      await calculator(newString);
    }
   
   

  }else{
  return number;
  }
}
(async function(){
  let result = await calculator('5+2*((5-1)+(7-1))');
  console.log("result",result)
})()

let mathOperation = async(matched,regex,string)=>{
  let subGroup = matched[2];
  number = subGroup.split("")[0];
  for(let i =0 ; i<subGroup.split("").length; i++){
    if (char == '+') {
      number += subGroup[index + 1]
    } else if (char == '-') {
      number -= subGroup[index + 1]
    } else if (char == "*") {
      number *= subGroup[index + 1]
    } else if (char == '/') {
      number *= subGroup[index + 1]
    }
  }
  let newString = string.replace(regex, number);
  return newString;
}


let newCalculator = async (string) => {
  let regex = /((?:\(([^(^)].*?)\))+)/
  let match = string.match(regex);
  console
  while (match[0].includes("(") || match[0].includes(")")) {
    match[0].match(regex)
  }
  await mathOperation(match,regex,string)
  
}