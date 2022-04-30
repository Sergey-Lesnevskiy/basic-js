const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits( n ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
n=n+""
   let arr =[]
if(n.length==1){
  return Number(n)
}
  
let summ=0;
  for(let i = 0; i < n.length; i++) {
   arr.push(Number(n[i]))
    
  }
  for (let i = 0; i < arr.length; i++) {
  summ+=arr[i]
// console.log(arr[i])
  }
  
if(summ>=10){
   return getSumOfDigits( summ )
}
return summ
  
}
module.exports = {
  getSumOfDigits
};
