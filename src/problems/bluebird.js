const Promise = require('bluebird')

/**
 * promise.spread , it is work as a then but you can separate the output of all()
 */

 let f1 = async ()=>{
      let add = async (a, b) => {
          return a + b;
      }
      let sub = async (a, b) => {
          return a - b
      }
      let outPut = await Promise.all([add(5, 7), sub(7, 5)]).spread(function (addOutPut, subOutPut) {
          return [addOutPut, subOutPut]
      });
      console.log("out",outPut) // [12,2]
      return outPut
  }
 