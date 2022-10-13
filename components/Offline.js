import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

export default function Offline({onRefreshPress}) {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#801212'}}>
     <Feather name="wifi-off" size={35} color='white' />
     <Text style={{fontSize:18,color:'white',paddingVertical:5}}>
        No Internet Connection
     </Text>
     <Pressable onPress={onRefreshPress} style={{flexDirection:'row',alignItems:'center'}}>
     <Feather name="refresh-cw" size={18} color='white'  style={{marginRight:10}}/>
     <Text style={{fontSize:18,paddingVertical:5,color:'white'}}>
        Try Again
     </Text>
     </Pressable>
    </View>
  )
}