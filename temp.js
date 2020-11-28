function gulam(str){
    let openingStack = [];
    let closingStack =[];
    let copyOfString = ''
    
    let lastIndexOfOpening , firstIndexOfClosing;
    for(let i =0; i< str.length ; i++){
        let number = 0;
        if(str[i] == '(' || str[i] == '{' || str[i] == '['){
            lastIndexOfOpening = i;
            openingStack.push(i)
        }else if(str[i] == ')' || str[i] == '}' || str[i] == ']'){

            firstIndexOfClosing = i
            closingStack.push(i)
            //[0,1,7] [5,11,12]
            let data = str.substring(openingStack[openingStack.length-1]+1, closingStack[closingStack.length-1])
            console.log("close",openingStack[openingStack.length-1],closingStack[closingStack.length-1], data)
            console.log("openingStack",openingStack,closingStack,openingStack[openingStack.length-1],closingStack[closingStack.length-1]+1)
            
            for (let j = 1; j < data.split("").length-1; j++) {
                number = parseFloat(data[0]);
                if (data[j] === '+') {
               number +=  parseFloat(data[j+1]);
                } else if (data[j] === '-') {
                    number -=  parseFloat(data[j+1]);
                } else if (data[j] === '*') {
                    number *=  parseFloat(data[j+1]);
                } else if (data[j] === '/') {
                    number /=  parseFloat(data[j+1]);
                }
            }
            console.log("number",number)
            let tempString = str.replace(str.substring(openingStack[openingStack.length-1], closingStack[closingStack.length-1]+1),number)
            console.log("gggg",tempString)
            openingStack.pop();
            closingStack.pop();
            
        }
    }
    
}
console.log("ggg",gulam('[(5+2)*(5+1)]'))
