import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity , Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {DefaultTheme, NavigationContainer} from '@react-navigation/native'
import icons from './constants/icons'
import {COLORS, SIZES} from './constants/theme'
import * as images from './constants/images'
import Home from './screens/home';
import OnBoarding from './screens/onboarding';
import DestinationDetail from './screens/destinationdetail';
import Tabs from './navigation/tabs';

const theme = {
  ...DefaultTheme,
  colors : {
    ...DefaultTheme.colors,
    border : "transparent"
  }
}


const Stack = createStackNavigator()

const App = () => {
  return(
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
        initialRouteName={'OnBoarding'}
      >
        {/* screens */}
      <Stack.Screen 
        name='OnBoarding' 
        component={OnBoarding} 
        options ={{
          title: null,
          headerStyle : {
            backgroundColor : COLORS.white
          },
          headerLeft : null,
          headerRight : () => (
            <TouchableOpacity
              style={{marginRight:SIZES.padding}}
              onPress={()=> {console.log("pressed")}}
            >
              <Image 
                source={icons.barMenu}
                resizeMode="contain"
                style={{
                  height : 25,
                  width : 25
                }}
              />
            </TouchableOpacity>
          )
        }}
        />
        <Stack.Screen 
          name="Home"
          component={Tabs}
          options={{
            headerLeft:({onPress}) => (
              <TouchableOpacity onPress={onPress} style={{marginLeft:SIZES.padding}}>
                  <Image 
                  source={icons.back}
                  resizeMode='contain'
                  style={{
                    height:25,
                    width:25
                  }}
                  />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity 
              style={{
                marginRight:SIZES.padding,
              }}
              onPress={()=> console.log('menu')}
              >
                <Image 
                  source={icons.menu}
                  resizeMode="contain"
                  style={{
                    height:25,
                    width:25
                  }}
                />
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen 
          name="DestinationDetail"
          component={DestinationDetail}
          options={{
            headerShown:false
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App