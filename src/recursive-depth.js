const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    

  calculateDepth(array,numb) {
   
if(!numb){
numb =1
}
    let result = numb;

    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        this.calculateDepth(array[i], numb + 1);
      }
    }
    return result;
  }
}

module.exports = {
  DepthCalculator
};
