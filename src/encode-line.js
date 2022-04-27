const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
let res="";
let curr="";
let currI="";
for(let i=0;i<str.length;i++)
{
if(curr!=str[i])
{
res+=currI+curr;
currI="";
curr=str[i]
}
else{
  currI=currI==""?2:currI+1;
}
} 
res+=currI+curr;
return res;
}

module.exports = {
  encodeLine
};
