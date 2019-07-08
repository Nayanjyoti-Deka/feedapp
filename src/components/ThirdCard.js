import React,{Component} from 'react';
import {View,Image,Button,Text,TouchableOpacity} from 'react-native';
import styles from './css/style.js';

export default class ThirdCard extends Component {

  render(){

      return(
      <View style={styles.thirdContainer}>
          <Image
          source={{uri: 'http://i66.tinypic.com/ru79eu.jpg'}}
          style={styles.roundImage}
          />
        <Text style={styles.name}>Alexandra Dadario</Text>
        <Text style={styles.name}>Parker Industries</Text>
        <TouchableOpacity
          style={styles.uxbutton}
        >
            <Text style={styles.uxtext}>UX-DESIGNER</Text>
      </TouchableOpacity>
      <View style={styles.collaborate}>

      </View>
      </View>
      )
}

}
