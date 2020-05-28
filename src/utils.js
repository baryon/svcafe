"use strict";
const md5 = require( "md5" );
/**
 * 
 * @param app 平台分配的 app_id
 * @param {*} cny 订单金额，整数，范围[50, 5000]，单位“元”
 * @param {*} address BSV 收款地址
 * @param {*} timestamp 10 位 UNIX 时间戳，调试时为了关闭校验可以用 app_id 的值代替
 * @param {*} app_secret 
 * @return {*} signature 将 app、cny、address、timestamp、app_secret 参数的值按顺序拼接后 MD5} queryData 
 */
function CreateSignature ( app, cny, address, timestamp, app_secret ) {
  return md5( app + cny + address + timestamp + app_secret );
}

module.exports = {
  CreateSignature
}
