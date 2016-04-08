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
  ScrollView,
  View
} from 'react-native';
import Head from './Head';
import TopScreen from './TopScreen';
class MyHealth extends Component {

  render() {
    return (
      <View style={styles.container}>
         <Head/>

          <ScrollView key={'scrollView'}
          horizontal={false}
          scrollEnabled= {true}>
        <View style={styles.view}>
        <Image source={require('./image/base_health.png')}
        style={styles.imageIcon} />
        <Text style={styles.t0}>健康指标</Text>
         <Image source={require('./image/arrows_right.png')}
         style={styles.imageArr} />
        </View>
        <View style={styles.line}/>
        <View style={styles.view}>
        <Image source={require('./image/health_test.png')}
        style={styles.imageIcon} />
        <Text style={styles.t0}>健康监测</Text>
         <Image source={require('./image/arrows_right.png')}
         style={styles.imageArr} />
        </View>
         <View style={styles.line}/>
        <View style={styles.view}>
        <Image source={require('./image/health_report.png')}
        style={styles.imageIcon} />
        <Text style={styles.t0}>健康报告</Text>
         <Image source={require('./image/arrows_right.png')}
         style={styles.imageArr} />
        </View>
         <View style={styles.line}/>
        <View style={styles.view}>
        <Image source={require('./image/base_log.png')}
        style={styles.imageIcon} />
        <Text style={styles.t0}>健康日志</Text>
         <Image source={require('./image/arrows_right.png')}
         style={styles.imageArr} />
        </View>
         <View style={styles.line}/>
        <View style={styles.view}>
        <Image source={require('./image/health_manage_task.png')}
        style={styles.imageIcon} />
        <Text style={styles.t0}>健康任务</Text>
         <Image source={require('./image/arrows_right.png')}
         style={styles.imageArr} />
        </View>
         <View style={styles.line}/>
        <View style={styles.view}>
        <Image source={require('./image/health_manage.png')}
        style={styles.imageIcon} />
        <Text style={styles.t0}>健康目标</Text>
         <Image source={require('./image/arrows_right.png')}
         style={styles.imageArr} />
        </View>
         <View style={styles.line}/>
         </ScrollView>
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
    marginLeft:170,
  },


});

module.exports = MyHealth;
