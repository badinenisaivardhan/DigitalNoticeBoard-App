import { View, Text,  Dimensions, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import dateFormat from "dateformat";
import { Divider } from 'react-native-paper';
import RenderHtml from 'react-native-render-html';
import {baseURL} from "@env"

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;



export default function NoticeDetail({route}) {
    const {_id,date,department,title,description} = route.params.post
    var imagedescription = description.replace('/uploads',`${baseURL}/uploads`)
    
  return (
      <ScrollView style={{width:width,height:height,backgroundColor:'white'}} >
      <View style={{marginBottom:20}}>
        <View style={{backgroundColor:'white',alignContent:'space-between'}}>
            <View style={{}}>
        <Text numberOfLines={6} style={{justifyContent:'center',alignContent:'center',alignSelf:'flex-start',marginLeft:19,fontWeight:'600',fontSize:20,marginBottom:-10,marginRight:30,textAlign:'left'}} >{title}</Text>
        <View style={{flexDirection:'row',marginTop:10,marginLeft:0}}>
        <Entypo name="clock" size={24} color="grey" style={{marginTop:10,marginLeft:19}}/>
            <Text style={{marginTop:13,margin:5,fontWeight:'400'}}>
            {dateFormat(date,"h.MM TT mmmm dS yyyy")}
            </Text>       
        </View>
        <Text selectable style={{fontWeight:'700',marginTop:10,marginLeft:23}} >By : {department}</Text>
        </View>
        <Divider style={{marginTop:10,margin:10,marginBottom:10,width:width-20,backgroundColor:'black'}}/>
        <View style={{marginTop:10,marginLeft:20,width:width-40,margin:10,maxWidth:width-40}}>
        <RenderHtml        
            contentWidth={width}
            source={{html:imagedescription}}
          />
        </View>
       </View>
    </View>
    </ScrollView>
  )
}