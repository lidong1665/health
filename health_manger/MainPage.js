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
  Dimensions,
  Navigator,
  TouchableOpacity,
  ToastAndroid,
  WebView,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import ScrollableTabView  from 'react-native-scrollable-tab-view';
import MyHealth from './MyHealth';
import HealthTools from './HealthTools';
import HealthSQ  from './HealthSQ';
import MyAccount  from './MyAccount';

import Login from './app/page/Login';
import Global from './app/util/Global';
import Util from './app/util/Util';
import NetUitl from './app/net/NetUitl';
import Head from './Head';
import TopScreen from './TopScreen';
import NButton from './app/commonview/NButton';
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
let tabBarHidden = false;
 class MainPage extends React.Component {

 constructor(props) {
        super(props);
        this.state = {selectedTab: MY_HEALTH,
                      tabBarShow:true};
        this._renderTabItem =  this._renderTabItem.bind(this);
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

    _createChildView1(tag) {
        let renderView;
        switch (tag) {
            case MY_HEALTH:
                renderView = <MyHealth />;
                break;
            case MY_HEALTH_CONSULT:
                renderView = <TopScreen />;
                break;
           case MY_HEALTH_TOOLS:
                    renderView = <HealthTools />;
                    break;
            case MY_HEALTH_COMMUNITY:
                renderView = <HealthSQ />;
                break;
            case MY_HEALTH_ACCOUNT:
                renderView = <MyAccount />;
                break;
            default:
                break;
        }
        return (<View style={styles.container}>{renderView}</View>)
    }

    static _createChildView(tag) {
        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }

    render(){
      let {tabBarShow} = this.state;
       console.log(tabBarShow);
      return (
        <View style={{flex: 1}}>
              <TabNavigator hidesTabTouch={true}
                    sceneStyle={{paddingBottom: 0}}
                    tabBarStyle={tabBarShow ? styles.tabNav : styles.tabNavHide}
                    overflow={'hidden'} >
                  {this._renderTabItem(MY_HEALTH_NORMAL, MY_HEALTH_FOCUS, MY_HEALTH,this._createChildView1(MY_HEALTH))}
                  {this._renderTabItem(MY_HEALTH_CONSULT_NORMAL, MY_HEALTH_CONSULT_FOCUS, MY_HEALTH_CONSULT, this._createChildView1(MY_HEALTH_CONSULT))}
                  {this._renderTabItem(MY_HEALTH_TOOLS_NORMAL, MY_HEALTH_TOOLS_FOCUS, MY_HEALTH_TOOLS, this._createChildView1(MY_HEALTH_TOOLS))}
                  {this._renderTabItem(MY_HEALTH_COMMUNITY_NORMAL, MY_HEALTH_COMMUNITY_FOCUS, MY_HEALTH_COMMUNITY, this._createChildView1(MY_HEALTH_COMMUNITY))}
                  {this._renderTabItem(MY_HEALTH_ACCOUNT_NORMAL, MY_HEALTH_ACCOUNT_FOCUS, MY_HEALTH_ACCOUNT,this._createChildView1(MY_HEALTH_ACCOUNT))}
              </TabNavigator>
          </View >
      );
    }
  }



const styles = StyleSheet.create({
  container: {
        flex: 1
    },
    tabNav: {
        height: 60,
        backgroundColor: '#FFF',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#E8E8E8'
    },
    tabNavHide: {
        position: 'absolute',
        top: Dimensions.get('window').height,
        height: 0
    },
  webview_style:{
       backgroundColor:'#00ff00',
    },
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

});

module.exports = MainPage;
