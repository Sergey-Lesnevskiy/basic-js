const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

  // throw new NotImplementedError('Not implemented');
  function dateSample( sampleActivity ) {
    
    
        if( typeof sampleActivity  !='string'){
        return false
      
        }
        else if(Number(sampleActivity)>0||Number(sampleActivity<15)){
    
      return  false
        }
       else if(sampleActivity==isNaN(" ")){
            return  false
        }
       else 
       
         if(isNaN(sampleActivity)){
         return false}
         else{
            
          }
    
      }


module.exports = {
  dateSample
};
