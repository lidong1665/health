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
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';  
import MyHealth from './MyHealth';
import HealthTools from './HealthTools';
import MyAccount from './MyAccount';

import Head from './Head';
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

class MainPage extends Component {

 constructor(props) {
        super(props);
        this.state = {selectedTab: MY_HEALTH}
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

    render() {
        return (
            <View style={{flex: 1}}>
               <Head/>
                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {this._renderTabItem(MY_HEALTH_NORMAL, MY_HEALTH_FOCUS, MY_HEALTH, <MyHealth/>)}
                    {this._renderTabItem(MY_HEALTH_CONSULT_NORMAL, MY_HEALTH_CONSULT_FOCUS, MY_HEALTH_CONSULT, MainPage._createChildView(MY_HEALTH_CONSULT))}
                    {this._renderTabItem(MY_HEALTH_TOOLS_NORMAL, MY_HEALTH_TOOLS_FOCUS, MY_HEALTH_TOOLS, <HealthTools/>)}
                    {this._renderTabItem(MY_HEALTH_COMMUNITY_NORMAL, MY_HEALTH_COMMUNITY_FOCUS, MY_HEALTH_COMMUNITY, MainPage._createChildView(MY_HEALTH_COMMUNITY))}
                    {this._renderTabItem(MY_HEALTH_ACCOUNT_NORMAL, MY_HEALTH_ACCOUNT_FOCUS, MY_HEALTH_ACCOUNT,<MyAccount/>)}
                </TabNavigator>
            </View >
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
});

module.exports = MainPage;
