/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import Button from './app/common_view/Button';


class Login extends Component {

constructor(props){
    super(props);
    this.state = {text:''}
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
          />
          <NavButton
          onPress={() => {
            _navigator.push({title:'MainPage',id:'page'})
            ToastAndroid.show('启动应用', ToastAndroid.SHORT);
        }}
        text="启动应用"
        style={styles.button1}  />
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
