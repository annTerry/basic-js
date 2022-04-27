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
 let res={};
 domains.forEach((element)=>
 {
   let tmpArr=[];
   let domains=element.split(".");
   for(let i=(domains.length-1);i>=0;i--)
   {
     tmpArr.push(domains[i]);
     let oneDomain = "."+tmpArr.join(".");
     if(res[oneDomain]){res[oneDomain]++;}
     else res[oneDomain]=1;

   }
 })
 return res; 
}

module.exports = {
  getDNSStats
};
