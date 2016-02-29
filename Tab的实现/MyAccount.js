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
  Image,
  View
} from 'react-native';

class MyAccount extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <View style={styles.view}>
        <Image source={require('./image/base_health.png')}
        style={styles.imageIcon} />
        <Text style={styles.t0}>登      录</Text>
         <Image source={require('./image/arrows_right.png')}
         style={styles.imageArr} />
        </View>
        <View style={styles.line}/>
        <View style={styles.view}>
        <Image source={require('./image/health_test.png')}
        style={styles.imageIcon} />
        <Text style={styles.t0}>注      册</Text>
         <Image source={require('./image/arrows_right.png')}
         style={styles.imageArr} />
        </View>
         <View style={styles.line}/>
        <View style={styles.view}>
        <Image source={require('./image/health_report.png')}
        style={styles.imageIcon} />
        <Text style={styles.t0}>绑定设备</Text>
         <Image source={require('./image/arrows_right.png')}
         style={styles.imageArr} />
        </View>
         <View style={styles.line}/>
        <View style={styles.view}>
        <Image source={require('./image/base_log.png')}
        style={styles.imageIcon} />
        <Text style={styles.t0}>检查更新</Text>
         <Image source={require('./image/arrows_right.png')}
         style={styles.imageArr} />
        </View>
         <View style={styles.line}/>
        <View style={styles.view}>
        <Image source={require('./image/health_manage_task.png')}
        style={styles.imageIcon} />
        <Text style={styles.t0}>绑定会员卡</Text>
         <Image source={require('./image/arrows_right.png')}
         style={styles.imageArr} />
        </View>
         <View style={styles.line}/>
        <View style={styles.view}>
        <Image source={require('./image/health_manage.png')}
        style={styles.imageIcon} />
        <Text style={styles.t0}>关于我们</Text>
         <Image source={require('./image/arrows_right.png')}
         style={styles.imageArr} />
        </View>

         <View style={styles.line}/>
         <View style={styles.view}>
         <Image source={require('./image/health_manage.png')}
        style={styles.imageIcon} />
        <Text style={styles.t0}>意见反馈</Text>
         <Image source={require('./image/arrows_right.png')}
         style={styles.imageArr} />
        </View>
        <View style={styles.line}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  view:{
    flexDirection:'row',
    alignItems: 'stretch',
    height:50,
    alignSelf:'stretch',
    backgroundColor: '#F8F8FF',
  },
  line:{
   height:1,
   alignSelf:'stretch',
   backgroundColor: '#708090',
  },
  imageIcon:{
    height:30,
    width:30,
    alignSelf:'center',
    marginLeft:20,
    marginRight:20,
  },
  t0:{
    alignSelf:'center',
    fontSize:20,
  },

  imageArr:{
    height:20,
    width:20,
    alignSelf:'center',
    marginLeft:150,
  },


});

module.exports = MyAccount;
