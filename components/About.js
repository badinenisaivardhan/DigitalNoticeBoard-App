import { View, Text, Dimensions, Image, Linking, ScrollView } from 'react-native'
import React from 'react'
//import { ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Divider } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function About() {
  return (
    <ScrollView scrollEnabled={true} style={{width:width-20,marginLeft:10}} >
    <View style={{flexDirection:'column',marginTop:10,marginBottom:25}} >
    <MaterialCommunityIcons style={{alignContent:'center',flex:1,flexDirection:'row',alignSelf:'center'}} name="fireplace-off" size={50} color="green" />
    <Divider style={{marginTop:10,marginBottom:10,color:'black'}}/>
      <Text selectable={true} style={{textAlign:'justify',justifyContent:'center',fontSize:18,fontWeight:'600'}}>
       Sponsored by the Jayamukhi Educational Society, the Jayamukhi Institute of Technological Sciences came into being in 2001 to provide quality and contemporary education with social relevance in the engineering faculty with an ultimate vision to maintain global standards in higher learning and research. 
       The Institute has the approval of AICTE and recognized by the Government of Telangana. 
        It is permanently affiliated to Jawaharlal Nehru Technological University (JNTU), Hyderabad., UGC Autonomous & accredited by NBA. 
       The Institute has come upon 40 acres of green pastures in Narsampet, about 30km away from the historic city of Warangal and presents a picturesque and panoramic view. 
      JITS offers a four-year B.Tech. Programme in the disciplines of CSE, ECE, EEE,CIVIL and ME.
      </Text >
      <Divider style={{marginTop:10,marginBottom:10,color:'black'}}/>
    <Text selectable={true} style={{fontWeight:'900',fontSize:25,justifyContent:'center',textAlign:'center',marginBottom:10}}>Vision and Mission of the Institution </Text>
    <Text selectable={true} style={{fontWeight:'600',fontSize:20,justifyContent:'center',textAlign:'center',marginBottom:10}}>VISION </Text>
    <Text selectable={true} style={{fontWeight:'600',fontSize:20,justifyContent:'center',textAlign:'left'}}>→ To be a premier Institute in the country, striving continuously in pursuit of excellence in educational environment wherein the students are prepared to meet the challenges of the modern industry and society.</Text>
    <Text selectable={true} style={{fontWeight:'600',fontSize:20,justifyContent:'center',textAlign:'center',marginTop:10,marginBottom:10}}>MISSION  </Text>
    <Text selectable={true} style={{fontWeight:'600',fontSize:20,justifyContent:'center',textAlign:'left'}}>→ To provide a healthy educational environment for students and staff to cater to the needs of the Society. </Text>
    <Text selectable={true} style={{fontWeight:'600',fontSize:20,justifyContent:'center',textAlign:'left'}}>→ To provide a creative environment and innovative approach to the learning process. </Text>
    <Text selectable={true} style={{fontWeight:'600',fontSize:20,justifyContent:'center',textAlign:'left'}}>→ To spread engineering/technological awareness at all levels. </Text>
    <Text selectable={true} style={{fontWeight:'600',fontSize:20,justifyContent:'center',textAlign:'left'}}>→ To contribute for the development of this region in particular and the nation in general.</Text>
    <Divider style={{marginTop:10,marginBottom:10}}/>
    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <Entypo name="location" size={25} color="black" style={{marginRight:10}}/>
    <Text selectable={true} style={{margin:10,fontWeight:'500',fontSize:18,color:'blue'}} onPress={()=> Linking.openURL('https://goo.gl/maps/XGNPywsCo1TeeuPz6')}>Narsampet, Warangal-506332 </Text>
    </View>
    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <Feather name="phone" size={25} color="black" style={{marginRight:10}}/>
    <Text selectable={true} style={{margin:0,fontWeight:'500',fontSize:18,color:'blue'}} >08718-208586, </Text>
    <Text selectable={true} style={{margin:0,fontWeight:'500',fontSize:18,color:'blue'}} >+91 9398077432  </Text>
    </View>
    <View selectable={true} style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <Feather name="mail" size={25} color="black" style={{marginRight:10}} />
    <Text selectable={true} style={{margin:10,fontWeight:'500',fontSize:18,color:'blue'}} >principal@jits.in</Text>
    </View>
  </View>
  </ScrollView>
  )
}