'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Component,
  View,
  Dimensions,
  ToastAndroid,
  TouchableOpacity,
  Image,
} = React;

import ViewPager from 'react-native-viewpager';
var deviceWidth = Dimensions.get('window').width;

let IMGS = [
  require('./image/job1.jpg'),
  require('./image/job2.jpg'),
  require('./image/job3.jpg')  ,
];
import Head from './Head';
class TopScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state ={dataSource:new ViewPager.DataSource({pageHasChanged: (p1, p2)=>p1 !== p2})
                .cloneWithPages(IMGS),
              };
  }


  _onPressButton1(){
    alert("健康圈子");
   ToastAndroid.show("健康圈子",ToastAndroid.SHORT);
  }
  _onPressButton2(){
    alert("健康道场");
   ToastAndroid.show("健康道场",ToastAndroid.SHORT);
  }
  _onPressButton3(){
    alert("健康小伙伴");
   ToastAndroid.show("健康小伙伴",ToastAndroid.SHORT);
  }
  render() {
    return (
      <View style = {styles.container}>
      <Head/>
      <ViewPager
        style={this.props.style}
        renderPage={this._renderPage}
        dataSource={this.state.dataSource}
        isLoop={true}
        autoPlay={true}/>
        <View  style = {{  flex: 1,  flexDirection:'row',height:80,}}>
        <TouchableOpacity style={styles.grid_view}
         onPress={this._onPressButton1}>
        <View >
        <Image source={require('./image/base_health.png')} style={{width:50,height:50}}/>
        <Text style = {{fontSize:15}}>
        健康圈子
        </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.grid_view}
         onPress={this._onPressButton2}>
        <View >
        <Image source={require('./image/base_health.png')} style={{width:50,height:50}}/>
        <Text style = {{fontSize:15}}>
        健康道场
        </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.grid_view}
         onPress={this._onPressButton2}>
        <View >
        <Image source={require('./image/base_health.png')} style={{width:50,height:50}}/>
        <Text style = {{fontSize:15}}>
        健康小伙伴
        </Text>
        </View>
        </TouchableOpacity>
        </View>
        </View>
    );
  }

  _renderPage(data){
          return(<Image source={data} style={styles.page} />);
      }
}


const styles = StyleSheet.create({
  container: {
        flex: 1
    },
   grid_view:{
      flex:1,
      top:1,
      height:100,
      alignItems:'center',
      justifyContent:'center',
    },
  page: {
    width: deviceWidth,
    backgroundColor: '#088856',
    height:270,
  },
});

module.exports = TopScreen;
