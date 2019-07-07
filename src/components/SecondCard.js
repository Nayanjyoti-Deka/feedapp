import React,{Component} from 'react';
import {View,Stylesheet,Image,Text} from 'react-native';
import styles from '../css/style.js';


export default class SecondCard extends Component{
    render(){
          return(
                  <View style={{flex:1}}>
                        <View style={{flex:2}}>
                          <Image source={{uri:'http://oi63.tinypic.com/b61phh.jpg'}} style={styles.backgroundImage}/>
                        </View>
                        <View style={{flex:2,marginLeft:10}}>
                            <Text style={styles.cardHeading}>No panalty on withdrawal from your fixed deposit</Text>
                            <Text style={styles.cardTxt}>On first partial withdrawal upto 25% of your original FD principal value</Text>
                            <Text style={styles.knowMore}>KNOW MORE</Text>
                        </View>

                  </View>

              );
    }
}
