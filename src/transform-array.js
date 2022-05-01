const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform( arr ) {
 
  try {

    if(Array.isArray(arr)){

      for (let i = 0; i < arr.length; i++) {
        if(arr[i]=='--discard-next'&&arr[i+2]=='--double-prev'){
          arr.splice(i,3)
          return arr
        }
        if(arr[i]=='--double-next'&&arr[i+2]=='--double-prev'){
         
          arr.splice(i+2,1)
         arr.splice(i,1,arr[i+1],arr[i+1])
          return arr
        }
          if(arr[i]=='--discard-next'&&arr[i+2]=='--discard-prev'){
          arr.splice(i,3)
          return arr
        }
          if(arr[i]=='--double-next'&&arr[i+2]=='--discard-prev'){
          arr.splice(i,1)
            arr.splice(i+1,1)
          return arr
        }
      
      
      if(arr[i]=='--discard-next'){
             if(i==arr.length-1){
              arr.splice(i, 1)
                 return arr
               }
         arr.splice(i, 2);
         }  else
           if(arr[i]=='--discard-prev'){
               if(i==0){
                arr.splice(i, 1)
                return arr
               }
          arr.splice(i-1, 2);
        }else
      
        if(arr[i]=='--double-next'){
          if(i==arr.length-1){
            arr.splice(i, 1)
            return arr
               }
               arr.splice(i, 1,arr[i+1]);
        }else
          if(arr[i]=='--double-prev'){
            if(i==0){
              arr.splice(i, 1)
              return arr
               }
               arr.splice(i, 1,arr[i-1]);
        }
        
        }
      
              return (arr) 
         }else{
              throw new Error(`'arr' parameter must be an instance of the Array!'`);
             }
  
  } catch (err) {
  
    throw new Error(`'arr' parameter must be an instance of the Array!'`)
  
  }
  
  
 }
 
module.exports = {
  transform
};
