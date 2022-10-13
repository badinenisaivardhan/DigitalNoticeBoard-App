import { Appearance, Dimensions, StatusBar } from 'react-native'
import 'react-native-gesture-handler'
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator , DrawerContentScrollView } from '@react-navigation/drawer';
import CustomSidebarMenu from './components/SideBar';
import News from './components/News';
import About from './components/About';
import * as Sentry from 'sentry-expo';
import NoticeScreenStack from './components/NoticeScreenStack';
import { useEffect, useState } from 'react';
import Offline from './components/Offline';
import { useNetInfo } from '@react-native-community/netinfo';
import { Sanity_DSN } from "@env" ;
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Results from './components/Results';

Sentry.init({
  dsn: Sanity_DSN,
  enableInExpoDevelopment: true, //
  debug: false, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').widtht;
const Drawer = createDrawerNavigator();


const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#801212',
    secondary: '#118604',
    tertiary: '#a1b2c3'
  }
};

 function App({}) {

  const [connection, setconnection] = useState(false)
  const netInfo =  useNetInfo()
    
  const fetchNetInfo = () =>{
    const {isConnected,isInternetReachable} = netInfo
    if(isConnected === false && isInternetReachable ===false){
      setconnection(true);
    }else{
      setconnection(false);
    }
  }

  useEffect(() => {
    fetchNetInfo()
  }, [netInfo])
  
  if(connection) return <Offline onRefreshPress={fetchNetInfo} />

  const CustomDrawer = (props)=>{
      return (
        <DrawerContentScrollView>
          <CustomSidebarMenu  {...props}/>
        </DrawerContentScrollView>
      )
  }

  const DrawerNavigator = ()=>{
    return (
      <Drawer.Navigator     
        drawerContent={(props)=>< CustomDrawer {...props} />}
      screenOptions={{
        swipeEdgeWidth:-100,
        drawerContentContainerStyle:{marginTop:height/11},
        drawerHideStatusBarOnOpen:false,
        headerStyle:{backgroundColor:theme.colors.primary},
        headerTitleStyle:{color:'white',fontWeight:'700'},
        drawerActiveBackgroundColor:'white',
        drawerStyle:{
          backgroundColor: theme.colors.primary,
        },
        headerTintColor:'white',
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'white',
        headerTitleAlign:'center',
        }}
      > 
  <Drawer.Screen name="Notices" component={NoticeScreenStack} />
  <Drawer.Screen name="Campus News" component={News}/>
  <Drawer.Screen name="About" component={About}/>
  {/* <Drawer.Screen name="Results" component={Results}/> */}
  </Drawer.Navigator>
    )
  }
  
  if(connection) {return <Offline onRefreshPress={fetchNetInfo} />}
  
  const ColorMode = () =>{
    if(Appearance.getColorScheme()=="light"){
      return 'dark-content'
    }
    else{
      return 'light-content'
    }
  }

  return (
    <PaperProvider theme={theme}>
    <StatusBar barStyle={ColorMode()}  />
    <NavigationContainer > 
    <DrawerNavigator/>
    </NavigationContainer>
    </PaperProvider>
  );
}
export default Sentry.Native.wrap(App);


