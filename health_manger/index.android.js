/**
 * HelloWorld1 Native App
 * https://github.com/facebook/react-native
 * @author:lidong
 * @date：2016-02-28
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  ToastAndroid,
  ViewPagerAndroid,
  Image,
  View
} from 'react-native';
var _navigator;
var MainPage = require('./MainPage');
import NButton from './app/commonview/NButton';
class health_manger  extends Component {
   /**
   *实例化时候调用，以后不再调用，初始化固定值，以后不再变，如静态的数据源。
   */
  // getDefaultProps(){
  //    return ;
  // }

   /**
   *初始化状态值，用于改变组件状态。
   */
  //  getInitialState(){
  //   return ;
  // }

  /**
  *组件将要被加载在视图
  */
  componentWillMount(){

  }

  /**
  *设置跳转方式
  */
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
      <ViewPagerAndroid
      style={styles.viewPager}
      initialPage={0}>
      <View style={styles.pageStyle} >
        <Image source={require('./image/guide1.png')}
        style={styles.image}
         />
      </View>
      <View style={styles.pageStyle}>
          <Image source={require('./image/guide2.png')}
          style={styles.image}
       />
      </View>
      <View style={styles.pageStyle}>
          <Image source={require('./image/guide3.png')}
            style={styles.image} >
            <NButton
            onPress={() => {
              _navigator.push({title:'MainPage',id:'page'})
              ToastAndroid.show('启动应用', ToastAndroid.SHORT);
          }}
          text="启动应用"
          style={styles.button1}  />
          </Image>
      </View>
    </ViewPagerAndroid>
       );
     }

    if(route.id === 'page'){
      return (
        <MainPage navigator={navigator} route={route}/>
      );
    }
  }
  /**
  *render是一个组件必须有的方法，形式为一个函数，
  *并返回JSX或其他组件来构成DOM，和Android的XML布局、
  *WPF的XAML布局类似，只能返回一个顶级元素
  *注意：在render函数中，只可通过this.state和this.props来访问在之前函数中初始化的数据值
  */
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
  //用了render方法后，组件加载成功并被成功渲染出来以后所执行的hook函数，一般会将网络请求等加载数据的操作，放在这个函数里进行，来保证不会出现UI上的错误
  componentDidMount(){}
  //指父元素对组件的props或state进行了修改
  componentWillReceiveProps(){}
  //一般用于优化，可以返回false或true来控制是否进行渲染
  shouldComponentUpdate(){}
 //组件刷新前调用，类似componentWillMount
  componentWillUpdate(){}
  //更新后的hook
 componentDidUpdate(){}
  //销毁期，用于清理一些无用的内容，如：点击事件Listener
 componentWillUnmount(){}

 };

//React Native组件的生命周期，经历了Mount->Update->Unmount这三个大的过程，即从创建到销毁的过程

 const styles = StyleSheet.create({
   viewPager: {
     flex: 1,
     // justifyContent: 'center',
     // alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   pageStyle: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
     position:'relative',
  },
   image: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom:40,
  },
  button1:{
    width:200,
    alignSelf: 'flex-start',
    flexDirection:'row',

  },
  messageText: {
    fontSize: 27,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
    alignSelf:'center',
  },
 });

AppRegistry.registerComponent('health_manger', () => health_manger);
