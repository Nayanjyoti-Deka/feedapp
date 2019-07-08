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
  },
  thirdContainer:{
    flex:1,
    textAlign:'center',

  },
  roundImage:{
      marginTop:20,
      width: 100,
      height: 100,
      borderRadius: 100/ 2,
  },
  name :{
      marginTop:30,
      fontSize: 30,
      fontWeight:'bold',
  },
  industries:{
      fontSize: 20,

},
  uxbutton:{
    borderWidth:1,
    borderColor:'#A9A9A9',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:60,
    backgroundColor:'#fff',
    borderRadius:50,
  },
  uxtext:{
    textAlign: 'center',
    color:'#A9A9A9',
    fontSize:18,
    borderWidth:1,
    borderColor:'#A9A9A9',
},
  collaborate: {
    backgroundColor:'#DCDCDC',
    height:50,
    width:'100%',
    borderWidth:1,
    borderColor: '#A9A9A9',
  }

});
export default styles;
