

'use strict';
import React, {
  Component,
} from 'react-native';

var API_ADDRESS = 'http://192.168.1.133:8088';
var GLOBAL = {
    HOST: 			API_ADDRESS,
    LOGIN:    	API_ADDRESS + '/cuslogin',
};

module.exports = GLOBAL;
