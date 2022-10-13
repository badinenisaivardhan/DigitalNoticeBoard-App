// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/
import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, Linking, Dimensions, } from 'react-native';
import { DrawerContentScrollView,DrawerItemList, DrawerItem,} from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';


const VersionNumber = "1.0.0"
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const CustomSidebarMenu = (props) => {
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image source={require('../assets/logo.png')} style={{width:300,height:90,alignSelf:'center',marginTop:height/16,marginBottom:10}} />
        {/* <Text style={{ flex:1, fontWeight:'700',fontSize: 25, textAlign: 'center', color: 'white', justifyContent:'center', marginTop:height/16 , marginBottom:10}}>
        Digital NoticeBoard
      </Text> */}
      <DrawerContentScrollView {...props} style={{marginBottom:20}}>
        <DrawerItemList {...props} />
        <Divider style={{backgroundColor:'white',marginTop:15,marginBottom:15}} />
        <DrawerItem 
          labelStyle={{color:'white',fontWeight:'700'}}
          label="Visit Us"
           icon={({ focused, color, size }) => <Feather name="globe" size={24} color="white" /> }
          onPress={() => Linking.openURL('https://jayamukhi.ac.in/')}
        />
        <DrawerItem 
          labelStyle={{color:'white',fontWeight:'700'}}
          label="Rate App"
           icon={({ focused, color, size }) => <Feather name="star" size={24} color="white" /> }
          onPress={() => Linking.openURL('https://jayamukhi.ac.in/')}
        />
        {/* <View style={styles.customItem}>
          <Text 
            style={{color:'white',fontWeight:'700'}}
            onPress={() => {
              Linking.openURL('https://aboutreact.com/');
            }}>
            Rate App
          </Text>
          <Image 
            source={require('../assets/star_filled.png')}
            style={styles.iconStyle}
          />
        </View> */}
      </DrawerContentScrollView>
      <TouchableOpacity style={{marginTop:75}} onPress={() => Linking.openURL('https://www.linkedin.com/in/badinenisaivardhan/')} >
      <Text style={{ fontWeight:'200',fontSize: 18, textAlign: 'center', color: 'white'  }}>
       Developed By : @BSV
      </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
