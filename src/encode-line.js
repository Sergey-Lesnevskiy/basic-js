const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine( str ) {
  let arr=[]
  let count;
  let letter=''
    let resoult=''
  for (let i = 0; i < str.length; i++) {
    count=1
    if(str[i]==str[i+1]){
    
    i++
      count++
    
        arr.push(count+str[i])
    }else {
       arr.push(str[i])
    }
  
  }
  
    for (let i = 0; i < arr.length; i++) {
      count=2
      letter=''
      if(arr[i]==arr[i+1]){
      count+=Number(arr[i][0])
         letter =arr[i][1]
       arr.splice(i,2, count+letter) 
      }
    if(arr[i][1]===arr[i+1]&&arr[i+1]!=undefined){
   
      count++
         letter =arr[i][1]
       arr.splice(i,2, count+letter)
      }
    }
  for (let i = 0; i < arr.length; i++) {
    resoult=resoult+arr[i]
  }
    
  
        
        return resoult
      }
  
   
module.exports = {
  encodeLine
};
