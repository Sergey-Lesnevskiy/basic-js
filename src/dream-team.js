const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
 if(members!=null){
  let arr=[]
  for (let i = 0; i < members.length; i++) {
    if( typeof members[i] === 'string'&&members[i]!=='null'){
        arr.push(members[i].trim().charAt(0).toUpperCase())
    }
  }
arr.sort()
let str=''
for (let i = 0; i < arr.length; i++) {
  str+=arr[i]
}
let num='1234567890'
for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < num.length; j++) {
    if(str[i]==num[j]){
   return  false
    }
  }
}
if(str.length==0){
return   false
}
return str.toUpperCase()
 }
   return false
  }

module.exports = {
  createDreamTeam
};
