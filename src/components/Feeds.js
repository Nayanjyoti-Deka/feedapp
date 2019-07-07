import React,{Component} from 'react';
import axios from 'axios';
import {View,Text,TouchableOpacity} from 'react-native';

export default class Feeds extends Component{
      constructor(props){
          super(props);
          this.state = {
              feed : [],
          }

      };
      componentWillMount(){

              axios.get('https://frozen-shore-39944.herokuapp.com/irshad/feeds')
                    .then((response)=>{
                          console.log(response.data);
                          this.setState({feed:response.data.data})
                      })
                    .catch(function (error){
                          console.log(error);
                      });
      }
      feedDetails = (data) => {
        axios.get('https://frozen-shore-39944.herokuapp.com/irshad/feeds/'+data.id)
              .then((response)=>{
                    console.log(response.data.data);

                })
              .catch(function (error){
                    console.log(error);
                });
          console.log(data);
      }

  render(){
        return(
            <View>
                  <Text>Feeds :</Text>
                  {this.state.feed.map((item,index)=>{
                      return(

                            <TouchableOpacity
                                    onPress={() => {this.feedDetails(item);}}
                                    key={index}
                                    style={{backgroundColor:'#DCDCDC',elevation:2,marginTop:20}}>
                                  <Text>Feed Name :</Text>
                                  <Text>{item.name}</Text>
                                  <Text>{item.feedCreator}</Text>
                            </TouchableOpacity>
                        )
                  })}
            </View>

        );
  }

}
