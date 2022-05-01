const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight( arr ) {
  let arr2=[]
 if(arr.length-1!=0){
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]==-1){
arr2.push(i)

}
  }
 for (let j = arr.length - 1; j > 0; j--) {
  for (let i = 0; i < j; i++) {
if(arr[i]==-1){
arr.splice(i,1) 
}
    
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
}
 
 for (let i = 0; i < arr2.length; i++) {
      arr.splice(arr2[i],0,-1)
 }
return arr
 }else{
   return arr
 }
     
  }
 

module.exports = {
  sortByHeight
};
