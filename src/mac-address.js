const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let res=true;
let tmpArr=n.split("-")
if(tmpArr.length!=6){res=false;}
for(let i=0;i<6 && res;i++)
{
  let twoDigit=tmpArr[i]+"";
  if (twoDigit.length!=2){res=false;break;}
  if (isNaN(parseInt(twoDigit,16))){res=false;}
}
return res;
}
module.exports = {
  isMAC48Address
};
