const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  if (!domains.length) {
    return {}
  }
  let arr = []


  for (let i = 0; i < domains.length; i++) {
    arr.push(domains[i].split('.'))
  }

    for (let i = 0; i < arr.length; i++) {
      arr[i].reverse()
  for (let j = 0; j < arr[i].length; j++) {
  arr[i][j]=`.${arr[i][j]}`
    
  }
  }
   for (let i = 0; i < arr.length; i++) {

  for (let j = 0; j < arr[i].length; j++) {
if(arr[i][j-1]){
  arr[i][j]=`${arr[i][j-1]}${arr[i][j]}`
}  
  }
  }
  
    const temp = arr.flat().reduce((acc,cur)=>{
    acc[cur] = (acc[cur]||0) + 1
     return acc
    },{})
     return temp
}
module.exports = {
  getDNSStats
};
