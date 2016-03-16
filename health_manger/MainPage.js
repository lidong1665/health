 /**
 *MainPage
 * @author:lidong
 * @date：2016-02-28
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  Navigator,
  TouchableOpacity,
  ToastAndroid,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import MyHealth from './MyHealth';
import HealthTools from './HealthTools';
import Login from './app/page/Login';

import Head from './Head1';

const MY_HEALTH = '我的健康';
const MY_HEALTH_NORMAL = require('./image/my_health_un.png');
const MY_HEALTH_FOCUS = require('./image/my_health_on.png');
const MY_HEALTH_CONSULT = '健康百科';
const MY_HEALTH_CONSULT_NORMAL = require('./image/my_health_consult_un.png');
const MY_HEALTH_CONSULT_FOCUS = require('./image/my_health_consult_on.png');
const MY_HEALTH_TOOLS = '健康工具';
const MY_HEALTH_TOOLS_NORMAL = require('./image/my_health_tool_un.png');
const MY_HEALTH_TOOLS_FOCUS = require('./image/my_health_tool_on.png');
const MY_HEALTH_COMMUNITY = '健康社区';
const MY_HEALTH_COMMUNITY_NORMAL = require('./image/my_health_community_un.png');
const MY_HEALTH_COMMUNITY_FOCUS = require('./image/my_health_community_on.png');
const MY_HEALTH_ACCOUNT = '我的账号';
const MY_HEALTH_ACCOUNT_NORMAL = require('./image/my_account_un.png');
const MY_HEALTH_ACCOUNT_FOCUS = require('./image/my_account_on.png');
var _navigator;

class MyAccount extends React.Component{

  constructor(props) {
         super(props);
     }

   _onPressButton(){
   ToastAndroid.show("---",ToastAndroid.SHORT);
    _navigator.push({title:'Login',id:'page'})
   }

  render() {
    return (
      <View style={styles.container1}>
        <TouchableOpacity onPress={this._onPressButton}>
        <View style={styles.view}>
        <Image source={require('./image/base_health.png')}
        style={styles.imageIcon} />
        <Text style={styles.t0}>登      录</Text>
         <Image source={require('./image/arrows_right.png')}
         style={styles.imageArr} />
        </View>
        </TouchableOpacity>
        <View style={styles.line}/>
        <TouchableOpacity onPress={this._onPressButton}>
        <View style={styles.view}>
        <Image source={require('./image/base_health.png')}
        style={styles.imageIcon} />
        <Text style={styles.t0}>注      册</Text>
         <Image source={require('./image/arrows_right.png')}
         style={styles.imageArr} />
        </View>
        </TouchableOpacity>
        <View style={styles.line}/>
      </View>
    );
  }
}

 class MainPage extends React.Component {

 constructor(props) {
        super(props);
        this.state = {selectedTab: MY_HEALTH};
        this._renderTabItem =  this._renderTabItem.bind(this);
        this.renderSceneAndroid = this.renderSceneAndroid.bind(this);
    }
    /**
    *img ；默认图标
    *selectedImg：选中的图标
    *tag：标题
    *childView：子控件
    */
    _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                title={tag}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({ selectedTab: tag })}>
                {childView}
            </TabNavigator.Item>
        );
    }

    static _createChildView(tag) {
        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }

    /**
    **/
    renderSceneAndroid(route, navigator){
      _navigator = navigator;
      if(route.id === 'main'){
        return(<View style={{flex: 1}}>
             <Head/>
              <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                  {this._renderTabItem(MY_HEALTH_NORMAL, MY_HEALTH_FOCUS, MY_HEALTH,<MyHealth/>)}
                  {this._renderTabItem(MY_HEALTH_CONSULT_NORMAL, MY_HEALTH_CONSULT_FOCUS, MY_HEALTH_CONSULT, MainPage._createChildView(MY_HEALTH_CONSULT))}
                  {this._renderTabItem(MY_HEALTH_TOOLS_NORMAL, MY_HEALTH_TOOLS_FOCUS, MY_HEALTH_TOOLS, <HealthTools/>)}
                  {this._renderTabItem(MY_HEALTH_COMMUNITY_NORMAL, MY_HEALTH_COMMUNITY_FOCUS, MY_HEALTH_COMMUNITY, MainPage._createChildView(MY_HEALTH_COMMUNITY))}
                  {this._renderTabItem(MY_HEALTH_ACCOUNT_NORMAL, MY_HEALTH_ACCOUNT_FOCUS, MY_HEALTH_ACCOUNT,<MyAccount/>)}
              </TabNavigator>
          </View >);
      }

      if(route.id === 'page'){
        return (
          <Login navigator={navigator} route={route}/>
        );
      }
    }

    render(){
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
    tab: {
        height: 60,
        backgroundColor: '#303030',
        alignItems: 'center',
    },
    tabIcon: {
        width: 30,
        height: 30,
        resizeMode: 'stretch',
        marginTop: 12.5
    },
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

module.exports = MainPage;
