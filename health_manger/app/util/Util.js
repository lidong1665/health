

'use strict';
import React, {
  Component,
} from 'react-native';


import Md5Uitl from './Md5Uitl';

class Util extends React.Component {

 static getToken(time) {
   return Md5Uitl.md5(time +Util.getPswId());
 }

static getKo(){
  return '0000';
}

static getTime(){
  var moment = require('moment');
  return moment().format("YYYY-MM-DD HH:mm:ss");
}

static getPswId(){
  return '0010000app';
}
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

static mapToJson(map) {
return JSON.stringify(Util.strMapToObj(map));
}

static tokenAndKo(map){
  let time = Util.getTime();
  map.set('time',time);
  map.set('ko',Util.getKo());
  map.set('token',Util.getToken(time));
  return map;
}

static strMapToObj(strMap){
  let obj= Object.create(null);
  for (let[k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}

}

module.exports = Util;
