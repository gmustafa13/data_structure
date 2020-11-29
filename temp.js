
let newCalculator = async (string) => {
    let result;
    if (string.includes("(")) {
        let regex = /((?:\(([^(^)].*?)\))+)/
        let match = regex.exec(string);
        let withoutBracket = match[2];
        let solvedBrackets = await arithmeticOperation(withoutBracket)
        let startIndex = match.index;
        let endIndex = match.index + match[0].length
        string = string.replace(string.substring(startIndex, endIndex), solvedBrackets)
        if (string.includes("(")) {
            newCalculator(string)
        } else {
            result = await arithmeticOperation(string);
        }
    } else {
        result = await arithmeticOperation(string);
    }
    
  }

let arithmeticOperation = async (matchedData) => {
    function solveSingle(arr){
        arr = arr.slice();
        while(arr.length-1){
          if(arr[1] === '*') arr[0] = arr[0] * arr[2]
          if(arr[1] === '-') arr[0] = arr[0] - arr[2]
          if(arr[1] === '+') arr[0] = +arr[0] + (+arr[2])
          if(arr[1] === '/') arr[0] = arr[0] / arr[2]
          arr.splice(1,1);
          arr.splice(1,1);
        }
        return arr[0];
      }
    let res = matchedData.split(/(\+|-)/g).map(x => x.trim().split(/(\*|\/)/g).map(a => a.trim()))
    res = res.map(x => solveSingle(x))
    let a = await solveSingle(res)
    // let number = parseFloat(matchedData[0]);
    // for (let i = 1; i < matchedData.length; i++) {
    //     if (matchedData[i] === '+') {
    //    number +=  parseFloat(matchedData[i+1]);
    //     } else if (matchedData[i] === '-') {
    //         number -=  parseFloat(matchedData[i+1]);
    //     } else if (matchedData[i] === '*') {
    //         number *=  parseFloat(matchedData[i+1]);
    //     } else if (matchedData[i] === '/') {
    //         number /=  parseFloat(matchedData[i+1]);
    //     }
    // }
    return a
}
newCalculator('2+5*(3-1*2)+(4+2)/2')