import React,{Component} from 'react';
import {View,Stylesheet,Image,Text,Modal,TouchableHighlight} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from '../css/style.js';


export default class FeedDetails extends Component{
    constructor(props){
          super(props);
          this.state ={
              url : '',
              visibility : true,
          };
    };
    setModalVisible(visible) {
        this.setState({visibility: visible});
      }

    render(){

          return(
                <View style={styles.container}>
                <Modal
                      animationType="slide"
                      transparent={false}
                      visible={this.state.visibility}
                    >

              <Image source={{uri:'http://oi66.tinypic.com/10zmejr.jpg'}} style={styles.backgroundImage}/>


            <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.visibility);
                }}>
                      <View style={styles.topView}>
                          <Text style={styles.domesticTxt}>Domestic</Text>
                      </View>
            </TouchableHighlight>

                      <View style={styles.bottomView}>
                          <Text style={styles.bottombigTxt}>Fishing In The Congo</Text>
                          <View style={styles.bottomEndView}>
                                <Icon name="location" size={30} color="white"/>
                                <Text style={styles.bottomEndTxt}>Democratic Republic Of The Congo</Text>
                          </View>
                      </View>
                  </Modal>
                </View>

        );
    }
}
