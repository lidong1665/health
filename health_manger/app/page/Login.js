/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import NButton from '../commonview/NButton';
import Md5Uitl from '../util/Md5Uitl';
import Util from '../util/Util';
import Global from '../util/Global';
import NetUitl from '../net/NetUitl';
import JsonUitl from '../util/JsonUitl';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  crypto,
  View
} from 'react-native';

class Login extends React.Component {

constructor(props){
    super(props);
    this.state = {text:'',
    phone:'',
    pwd:'',};
    this.login = this.login.bind(this);
}

checkPhone(phone){
    return  phone.length>6;
  }

checkPWD(pwd){
    return  pwd.length>4;
  }

login(){
  let phone = this.state.phone;
  let pwd = this.state.pwd;
  alert(phone);
 if(!this.checkPhone(phone)){
      alert("请输入正确的手机号码");
      return;
  }
  if(!this.checkPWD(pwd)){
      alert("密码为大于6位数字");
      return;
  }

  let url = Global.LOGIN;
  let map = new Map()
  map.set('username',phone);
  map.set('password',pwd);
  map.set('orgid','0010000');
  let sx = JsonUitl.mapToJson(Util.tokenAndKo(map));
  NetUitl.postFrom(url,sx,function (set){
    switch (set.retCode) {
      case "0000":
          alert("登录成功");
        break;
     case "0001":
        alert("登录失败");
          break;
      default:
    }
  });
}

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
        登录
      </Text>
        <TextInput
              style={styles.style_user_input}
              placeholder='QQ号/手机号/邮箱'
              numberOfLines={1}
              autoFocus={true}
              underlineColorAndroid={'transparent'}
              textAlign='center'
              onChangeText={(text) => this.setState({phone: text})}
          />
          <View
              style={{height:1,backgroundColor:'#f4f4f4'}}
          />
          <TextInput
              style={styles.style_pwd_input}
              placeholder='密码'
              numberOfLines={1}
              underlineColorAndroid={'transparent'}
              secureTextEntry={true}
              textAlign='center'
              onChangeText={(text) => this.setState({pwd: text})}
          />
        <NButton
          onPress={this.login}
          text="登录"
         style={{width:200}}  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#3CB371',
    justifyContent: 'center',
    alignItems: 'center',
    height:40,
  },
  style_user_input:{
      backgroundColor:'#fff',
      marginTop:10,
      height:55,
  },
   style_pwd_input:{
      backgroundColor:'#fff',
      height:55,
  },
});

module.exports = Login;
