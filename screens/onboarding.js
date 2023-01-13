import React from 'react'
import {Text , View , SafeAreaView, Image ,StyleSheet, TouchableOpacity} from 'react-native'
import icons from '../constants/icons'
import {COLORS, SIZES} from '../constants/theme'
import * as images from '../constants/images'
import {LinearGradient} from 'expo-linear-gradient';
import Home from './home'



const OnBoarding = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={{flex:1 , justifyContent:'center',alignItems:'center'}}>
                <Image 
                source={images.onboardingImage}
                resizeMode="contain"
                style={{
                    height:'100%',
                    width:'100%'
                }}
                />
            </View>
            <View style={{flex:1 , justifyContent:'center',alignItems:'center'}}>
                <View style={{alignItems:'center', marginHorizontal:SIZES.padding}}>
                    <Text style={{fontSize:20}}>Digital Ticket</Text>
                    <Text style={{textAlign:'center',color:COLORS.gray,marginTop:SIZES.padding}}>Easy solution to buy ticket for your travel,buisness trips,transportation,lodging,culinary</Text>
                </View>
                <TouchableOpacity style={[styles.shadow,{marginTop:SIZES.padding*2,height:50,width:'70%',alignItems:'center',justifyContent:'center'}]} onPress={()=> navigation.navigate("Home")}>
                    <LinearGradient
                    style={{height:'100%', width:'100%' , alignItems:'center', justifyContent:'center',borderRadius:15}}
                    colors={['#46aeff',"#5884ff"]}
                    start={{x:0,y:0}}
                    end={{x:1,y:1}}
                    >
                        <Text style={{color:COLORS.white}}>Start!</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default OnBoarding


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:COLORS.white
    },
    shadow : {
        shadowColor: '#000',
        shadowOffset : {
            width : 0,
            height : 2,
        },
        shadowOpacity : 0.25,
        shadowRadius : 3.84,
        elevation : 5
    }
})