

'use strict';
import React, {
  Component,
} from 'react-native';
/**
*Md5加密的实现
*/
class JsonUitl extends React.Component {

  /**
  *字符串转json
  */
  static stringToJson(data){
    return JSON.parse(data);
  }
  /**
  *json转字符串
  */
  static jsonToString(data){
    return JSON.stringify(data);
  }
  /**
  *map转换为json
  */
  static mapToJson(map) {
  return JSON.stringify(Util.strMapToObj(map));
  }
  /**
  *json转换为map
  */
  static jsonToMap(jsonStr){
    return  objToStrMap(JSON.parse(jsonStr));
  }


 /**
 *map转化为对象（map所有键都是字符串，可以将其转换为对象）
 */
 static strMapToObj(strMap){
    let obj= Object.create(null);
    for (let[k,v] of strMap) {
      obj[k] = v;
    }
    return obj;
  }

/**
*对象转换为Map
*/
static   objToStrMap(obj){
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k,obj[k]);
  }
  return strMap;
}


}

module.exports = JsonUitl;
