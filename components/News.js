
import { Appbar ,Divider,Searchbar, Text} from 'react-native-paper';
import { Dimensions, FlatList, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { getNews } from './api';
import NewsList from './NewsList';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
 

export default function News() {
  const [isloading , setloading] = useState(false);
  const [news,setnews]= useState('');
  const [newsend, setnewsend] = useState(false)
  
  const fetechMoreNews = async ()=>{
    if(news.nextpage>1){
      const {data,error} = await getNews(news.nextpage)
      setnews({data:[...news.data,...data.data],nextpage:data.nextpage})
      //console.log(notices)
      //setnotices([...notices])
    }else{
      setnewsend(true);
    }
  }

  const fetchNews = async () =>{
      setnewsend(false)
      setloading(true)
      const {data,error} = await getNews()
      if(error) return console.log(error)
      if(data){
        setloading(false)
        setnews(data)
      }
  }

  useEffect(()=>{
      fetchNews();
  },[])

  return (
    <View style={{flex:1,marginBottom:0,width:width,height:height,backgroundColor:'white'}}>
    <View style={{flex:1,marginTop:10,maxWidth:width-10}}>
    <FlatList style={{backgroundColor:'white',height:height}}
    data={news.data}
    showsVerticalScrollIndicator={false}
    onEndReached={async () => await fetechMoreNews()}
    contentContainerStyle={{paddingHorizontal:10}} 
    keyExtractor={(item)=>item._id} 
    refreshing={isloading}
    onRefresh={()=>fetchNews()}
    renderItem={({item})=>{
      return <View style={{flex:1}}>
        <NewsList post={item} />
        <Divider style={{margin:5,backgroundColor:'black'}}/>
      </View>
    }} 
    ListFooterComponent={()=>{
      return newsend ? 
        <Text style={{textAlign:'center',color:'#383838',paddingVertical:10,fontWeight:'bold',marginBottom:10}}> You Reached To End </Text>
      : 
      <Text style={{textAlign:'center',color:'#383838',paddingVertical:10,fontWeight:'bold',marginBottom:10}}> Loading...! </Text>
    }}
    
    />
    </View>
    </View>
  )
}
