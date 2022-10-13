import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NoticeBoard from './NoticeBoard';
import NoticeDetail from './NoticeDetail';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function NoticeScreenStack() {

    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();
  
    return (
    <Stack.Navigator>
        <Stack.Screen component={NoticeBoard} name="NoticesHome" options={{headerShown:false,gestureEnabled:false}}/>
        <Stack.Screen component={NoticeDetail} name="NoticeDetail" options={{
            headerStyle:{backgroundColor:'white'},
            headerShown:true,
            headerTitle:'',
            headerTransparent:false,
            headerShadowVisible:false,
            gestureEnabled:false,
            headerLeft:(props)=>(
                <TouchableOpacity {...props} onPress={()=> navigation.goBack()}>
                    <FontAwesome5 name="arrow-circle-left" size={24} color="blue" style={{marginRight:12,margin:10,marginBottom:10}} />
                </TouchableOpacity>
            )
             }}/>
    </Stack.Navigator>
  )
}