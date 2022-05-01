const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 
 function repeater( str, options ) {
  let result =''
    let addition_res=''
   // `addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
   //  - `additionRepeatTimes` устанавливает число повторений `addition`
   //  - `additionSeparator` это строка, разделяющая повторения `addition`
  
  
     // if(typeof options.additionSeparator == "undefined"){
     //  options.additionSeparator='|'
     //  this.additionSeparator=options.additionSeparator}
     if(typeof options.repeatTimes == "undefined"){
      return (str+options.addition)
    }

   
     if(typeof options.separator == "undefined"){
      options.separator='+'
    }else{
         this.separator=options.separator
    }
  
    
     if(typeof options.addition != "undefined"){
       
  for (let i = 0; i < options.additionRepeatTimes; i++) {
  
    addition_res+=options.addition
  }
   for (let i = 0; i < options.repeatTimes; i++) {
    if(i==0){
      result=result+str+addition_res
    }else{
    result=result+options.separator+str+addition_res
  
  }
   
    
    }
       
    }else{
        for (let i = 0; i < options.repeatTimes; i++) {
      if(i==0){
        result=result+str
      }else{
         result=result+options.separator+str
      }
     
    
    }
    }
  
  
  
    
   return result
  }

module.exports = {
  repeater
};
