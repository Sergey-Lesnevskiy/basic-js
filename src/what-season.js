const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason( date ) {
  let error = 'Invalid date!'
  
    
    if( date !=undefined){
   if(date instanceof Date){
  
  if(date.getMonth()<2){
    return 'winter'
  }else if(date.getMonth()<5){
    return 'spring'
  }else if(date.getMonth()<7){
    return 'summer'
  }else if(date.getMonth()<11) {
    return 'autumn'
  }else if(date.getMonth()==11) {
    return 'winter'
  }
     
      }else{
       throw new Error(error);
      }
  }else{
    return console.log('Unable to determine the time of year!')
  }
  }

module.exports = {
  getSeason
};
