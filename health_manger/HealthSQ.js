'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  WebView,
  View
} from 'react-native';
import NetUitl from './app/net/NetUitl';
import ScrollableTabView  from 'react-native-scrollable-tab-view';
import Head from './Head';

class HealthSQ extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
      <View style={{flex:1}}>
      <Head/>
        <ScrollableTabView>
        <WebView
                tabLabel="个人体重"
        style={styles.webview_style}
        source={{uri: NetUitl.url_healthmonitnorm("IA-003")}}
        startInLoadingState={true}
        domStorageEnabled={true}
        javaScriptEnabled={true}  >
        </WebView>
        <WebView
                tabLabel="腰围尺寸"
        style={styles.webview_style}
        source={{uri: NetUitl.url_healthmonitnorm("IA-006")}}
        startInLoadingState={true}
        domStorageEnabled={true}
        javaScriptEnabled={true}  >
        </WebView>
        <WebView
                tabLabel="BIM指数"
        style={styles.webview_style}
        source={{uri: NetUitl.url_healthmonitnorm("IA-005")}}
        startInLoadingState={true}
        domStorageEnabled={true}
        javaScriptEnabled={true}  >
        </WebView>
        <WebView
                tabLabel="血压值"
        style={styles.webview_style}
        source={{uri: NetUitl.url_healthmonitnorm("IA-012")}}
        startInLoadingState={true}
        domStorageEnabled={true}
        javaScriptEnabled={true}  >
        </WebView>
        <WebView
                tabLabel="心跳频率"
        style={styles.webview_style}
        source={{uri: NetUitl.url_healthmonitnorm("IA-000")}}
        startInLoadingState={true}
        domStorageEnabled={true}
        javaScriptEnabled={true}  >
        </WebView>


        </ScrollableTabView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  webview_style:{
       backgroundColor:'#00ff00',
    },
  });
module.exports = HealthSQ;
