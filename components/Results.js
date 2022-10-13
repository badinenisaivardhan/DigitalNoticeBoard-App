import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useState } from 'react'


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function Results() {
 
  const [text, setText] = useState('');  
  const [clickregister, setclickregister]=useState(false);

  const FetchResult = async ()=>{
    if(text){
       console.log(text)
    }
    else{
        return ;
    }
  }

  return (
    <View style={{marginTop:25,width:width-40,margin:20}}>
        <Text style={{textAlign:'left',fontSize:30,color:'blue',fontWeight:'500',marginBottom:10, width:width-(width/2)}}>HallTicket</Text>
      <TextInput
        style={{height:40}}
        placeholder="Enter Your Hall Ticket Number"
        onChangeText={newText =>{setclickregister(false), setText(newText)}}
        defaultValue={text}
      />
      <Button style={{marginTop:20}} icon="file" mode="contained" onPress={() => (setclickregister(true), FetchResult() )}>
        Get Result
     </Button>
    { clickregister? <Text style={{padding: 10, fontSize: 42}}>{text}</Text>: null  }
    </View>
  )
}