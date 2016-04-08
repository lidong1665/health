
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  Navigator,
  Dimensions,
  ToastAndroid,
  TouchableOpacity,
  WebView,
  View
} from 'react-native';
import Head from './Head';
let _navigator;
import Login from './app/page/Login';
import NButton from './app/commonview/NButton';
class MyAccount extends React.Component{

  constructor(props) {
         super(props);
         this._onPressButton = this._onPressButton.bind(this);
     }

   _onPressButton(){
     alert("1111");
    ToastAndroid.show("--rrrrrrrrrrrrrrrr-",ToastAndroid.SHORT);
    // _navigator.push({title:'Login',id:'login'});
   }
   _onPressButton1(){
     alert("1111");
    ToastAndroid.show("--rrrrrrrrrrrrrrrr-",ToastAndroid.SHORT);
    // _navigator.push({title:'Login',id:'login'});
   }
   configureScenceAndroid(){
     return Navigator.SceneConfigs.FadeAndroid;
   }

   /**
   *配置跳转路由
   */
   renderSceneAndroid(route, navigator){
     _navigator = navigator;
     if(route.id === 'main'){
       return (
         <View style={styles.container} onPress={this._onPressButton}>
         <Head/>
           <TouchableOpacity style={styles.view}  onPress={() => {
              _navigator.push({title:'Login',id:'login'});
              ToastAndroid.show('启动应用', ToastAndroid.SHORT);
            }}>
           <View style={styles.view}>
           <Image source={require('./image/base_health.png')}
           style={styles.imageIcon} />
           <Text style={styles.t0}>登      录</Text>
            <Image source={require('./image/arrows_right.png')}
            style={styles.imageArr} />
           </View>
           </TouchableOpacity>
         </View>
       );
     }

     if (route.id ==='login') {
       return (
         <Login navigator={navigator} route={route}/>
       );
     }
   }


  render() {
    var renderScene = this.renderSceneAndroid;
    var configureScence = this.configureScenceAndroid;
   return (
     <Navigator
       debugOverlay={false}
       initialRoute={{ title: 'Main', id:'main'}}
       configureScence={{configureScence}}
       renderScene={renderScene}
     />
   );
  }
}


const styles = StyleSheet.create({
    container1: {
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
