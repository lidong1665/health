




'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View
} from 'react-native';
var _navigator;

class NButton extends React.Component {

   render() {
     return (
       <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
         <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
     );
   }
 }
 const styles = StyleSheet.create({
  messageText: {
    fontSize: 27,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
    alignSelf:'center',
  },
 });
module.exports = NButton;
