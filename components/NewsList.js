import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const width = Dimensions.get('window').width
export default function NewsList({post}) {
    const {title,date} = post
  return (
    <View style={{width:width-20,maxWidth:width-40}} >
        <View style={{flexDirection:'row',marginBottom:5}}>
        <FontAwesome name="newspaper-o" size={24} color="blue" />
        <Text style={{marginLeft:10,margin:2}}>{date}</Text>
        </View>
        <Text style={{color:'black',fontSize:14,textAlign:'justify',justifyContent:'space-between'}}>{title}</Text>
    </View>
  )
}