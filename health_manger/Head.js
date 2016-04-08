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
  View
} from 'react-native';

class Head extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          健康管理
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems: 'stretch',
    height:50,
    alignSelf:'stretch',
    backgroundColor:'#219772',
    justifyContent: 'center',
  },
  welcome: {
    fontSize:20,
    alignSelf:'center',
  },
});

module.exports = Head;
