

'use strict';
import React, {
  Component,
} from 'react-native';


import Md5Uitl from './Md5Uitl';
/**
*工具的实现
*/
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


static tokenAndKo(map){
  let time = Util.getTime();
  map.set('time',time);
  map.set('ko',Util.getKo());
  map.set('token',Util.getToken(time));
  return map;
}


}

module.exports = Util;
