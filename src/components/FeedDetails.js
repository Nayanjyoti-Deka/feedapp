import React,{Component} from 'react';
import {View,Stylesheet,Image,Text} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from '../css/style.js';


export default class FirstCard extends Component{
    constructor(props){
          super(props);
          this.state ={
              url : '',
          };
    };

    // componentWillMount(){
    //   var self = this;
    //         axios.get('http://tinypic.com/m/kc1fdl/1')
    //               .then(function (response){
    //                     console.log(response.data);
    //                     self.setState({url:response.data})
    //                 })
    //               .catch(function (error){
    //                     console.log(error);
    //                 });
    // }
    render(){

          return(
                <View style={styles.container}>
                      <Image source={{uri:'http://oi66.tinypic.com/10zmejr.jpg'}} style={styles.backgroundImage}/>
                      <View style={styles.topView}>
                          <Text style={styles.domesticTxt}>Domestic</Text>
                      </View>
                      <View style={styles.bottomView}>
                          <Text style={styles.bottombigTxt}>Fishing In The Congo</Text>
                          <View style={styles.bottomEndView}>
                                <Icon name="location" size={30} color="white"/>
                                <Text style={styles.bottomEndTxt}>Democratic Republic Of The Congo</Text>
                          </View>
                      </View>
                </View>

        );
    }
}
