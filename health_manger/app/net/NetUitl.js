

'use strict';
import React, {
  Component,
} from 'react-native';
import Util from '../util/Util';
import Global from '../util/Global';
class NetUitl extends React.Component {

  //post请求
  static  postFrom(url, data, callback) {
      var fetchOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:'data='+data+''
      };

      fetch(url, fetchOptions)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText));
      }).done();
    }
    //
    static postJson (url, data, callback) {
        var fetchOptions = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            //json形式
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };

      fetch(url, fetchOptions)
        .then((response) => response.text())
        .then((responseText) => {
          callback(JSON.parse(responseText));
        }).done();
      }


    //get请求
  static  get(url, callback) {
      fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText));
      }).done();
    }

    log(obj){
      var description = "";
       for(var i in obj){
          var property=obj[i];
          description+=i+" = "+property+"\n";
       }
       alert(description);
    }

    static  url_healthmonitbase(){
      const time= Util.getTime();
      const s=  Global.HOST+"/healthmonitbase?customerid=0010000022464&density=480&ko=0000&time="+time+"&token="+Util.getToken(time);
      return s ;
      }

   static url_healthmonitnorm(checkItemCode){
      const time= Util.getTime();
      const  ul = Global.HOST+"/healthmonitnorm?checkItemCode=" + checkItemCode +"&customerid=0010000022464&sexid=1&currentPage=1&density=480&ko=0000&time="+time+"&token="+Util.getToken(time);
      return ul;
    }

}

module.exports = NetUitl;
