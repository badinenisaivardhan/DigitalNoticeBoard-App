import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import dateFormat from "dateformat";

const width = Dimensions.get('window').width;
import {useNavigation} from '@react-navigation/native';

export default function NoticesList({post}) {
  const navigation = useNavigation();
  const {_id,department,title,date} = post

  return (
<TouchableOpacity style={{flexDirection:'row'}} onPress={()=> navigation.navigate('NoticeDetail',{post}) } >
    <View style={{flex:1,flexDirection:'row'}}>
   <View style={{flex:1,margin:10}}>
       <View style={{flexDirection:'row',alignContent:'space-between'}}>
       <Entypo style={{alignSelf:'flex-end',marginLeft:5}} name="pin" size={24} color="darkgreen" />
       <Text style={{fontWeight:'700',fontSize:17,marginLeft:5}}>{department}</Text>
       </View>
        <Text style={{fontWeight:'300',fontSize:13,color:'#636060',marginBottom:3,color:'grey'}}>{dateFormat(date,"h.MM TT mmmm dS yyyy")}</Text>
        <Text style={{fontWeight:'600',fontSize:15}} numberOfLines={5} >{title}</Text>
   </View>
   <View>
   <Text></Text>
   <FontAwesome5 name="arrow-circle-right" size={24} color="blue" style={{marginRight:12,margin:10}} />
    </View> 
   </View>
</TouchableOpacity>
  )
}

// <Entypo style={{alignSelf:'flex-end',marginLeft:225}} name="pin" size={24} color="green" />