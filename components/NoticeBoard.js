
import { Appbar ,Divider,Searchbar, Text} from 'react-native-paper';
import { FlatList, Image, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { getNotices } from './api';
import NoticesList from './NoticesList';


export default function NoticeBoard() {
  const [isloading , setloading] = useState(false)
  const [notices,setnotices]= useState('');
  const [reachedEnd, setreachedEnd] = useState(false)
  
  const fetchNotices = async () =>{
       setloading(true)
       setreachedEnd(false)
       const {data,error} = await getNotices()
       if(error) return console.log(error)
       if(data){
        setloading(false)
        setnotices(data)
       }
       
  }


  const fetechMoreNotice = async ()=>{
    if(notices.nextpage>1){
      const {data,error} = await getNotices(notices.nextpage)
      setnotices({data:[...notices.data,...data.data],nextpage:data.nextpage})
      //console.log(notices)
    }else{
      setreachedEnd(true);
    }
  }

  useEffect(()=>{
      fetchNotices();
  },[])


  return (
    <View style={{flex:1}}>
    {/* <Searchbar style={{alignContent:'flex-end'}} placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} /> */}
    <View style={{marginTop:10,flex:1}}>
    <FlatList style={{backgroundColor:'white'}}
    onEndReached={async () => await fetechMoreNotice()}
    data={notices.data}
    contentContainerStyle={{paddingHorizontal:10}} 
    keyExtractor={(item)=>item._id} 
    onRefresh={()=>fetchNotices()}
    refreshing={isloading}
    renderItem={({item})=>{
      return <View style={{flex:1}}>
        <NoticesList post={item} />
        <Divider style={{margin:5,backgroundColor:'black'}}/>
      </View>
    }}
    ListFooterComponent={()=>{
      return reachedEnd ? 
        <Text style={{textAlign:'center',color:'#383838',paddingVertical:10,fontWeight:'bold',marginBottom:10}}> You Reached To End </Text>
      : 
      <Text style={{textAlign:'center',color:'#383838',paddingVertical:10,fontWeight:'bold',marginBottom:10}}> Loading...! </Text>
    }}
    />
    </View>
    </View>
  )
}
