import {StyleSheet} from 'react-native';

 const styles= StyleSheet.create({

  container :{
      flex:1,
  },
  backgroundImage :{
      width:'100%',
      height:'100%',
      position:'absolute',
      resizeMode:'cover'
  },
  topView :{
      width:150,
      height:70,
      backgroundColor:'black',
      marginTop:'10%',
      borderBottomRightRadius:50,
      borderTopRightRadius:50
  },
  domesticTxt :{
    color:'white',
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold',
    marginTop:'10%'
  },
  bottomView : {
    position:'absolute',
    bottom:'10%',
    left:'5%'
  },
  bottombigTxt :{
    fontSize:35,
    fontWeight:'bold',
    color:'white',
  },
  bottomEndView :{
    marginTop:20,
    flexDirection:'row'
  },
  bottomEndTxt :{
    fontSize:15,
    color:'white'
  },
  cardHeading :{
    fontSize : 30,
    fontWeight :'bold',
    color : '#000000',
    marginTop:'10%',
  },
  cardTxt :{
    fontSize : 23,
    color : '#000000',
    marginTop:20,
  },
  knowMore :{
    fontSize : 30,
    color : '#F08080',
    marginTop:'20%',
    fontWeight:'bold'
  }

});
export default styles;
