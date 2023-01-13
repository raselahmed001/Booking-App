import React from 'react'
import {Text , View , Image, TouchableOpacity , FlatList , StyleSheet} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import icons from '../constants/icons'
import images from '../constants/images'
import { COLORS, SIZES } from '../constants/theme'
import { size } from 'lodash';


const OptionItem = ({icon , bgColor, label , onPress}) => {

    return(
        <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center'}} onPress={onPress}>
            <View style={[styles.shadow,{height:50,width:50}]}>
                <LinearGradient
                    style={{flex:1,alignItems:'center',justifyContent:'center',borderRadius:15}}
                    colors={bgColor}
                    start={{x:0,y:0}}
                    end={{x:0,y:1}}
                >   
                    <Image 
                        source={icon}
                        resizeMode="cover"
                        style={{
                            tintColor:COLORS.white,
                            width:30,
                            height:30
                        }}
                    />
                </LinearGradient>
            </View>
            <Text style={{marginTop:SIZES.base,color:COLORS.gray}}>{label}</Text>

        </TouchableOpacity>
    )
}




const Home = ({navigation}) => {
        
    const [destination , setDestination] = React.useState([
        {
            id:0,
            name:"Climbing Hill",
            img:images.climbingHills
        },
        {
            id:1,
            name:"Frozen Hills",
            img:images.frozenHills
        },
        {
            id:2,
            name:"Beach",
            img:images.beach
        },
        {
            id:3,
            name:"Beach",
            img:images.beach
        }
    ])

    function renderDestination(item,index){
        var destinationStyle = {}
        if(index==0){
            var destinationStyle = {marginLeft:SIZES.padding}
        }
        return(
            <TouchableOpacity
                style={{justifyContent:'center',marginHorizontal:SIZES.base,...destinationStyle}}
                onPress={()=> {navigation.navigate('DestinationDetail')}}
            >
                <Image 
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width:SIZES.width * 0.28,
                        height:'82%',
                        borderRadius:15
                    }}
                />
                <Text style={{marginTop:SIZES.base/2}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            {/* Banner */}
            <View style={{flex:1,marginTop:SIZES.base,paddingHorizontal:SIZES.padding}}>
                <Image 
                    source={images.homeBanner}
                    resizeMode="cover"
                    style={{
                        height:"100%",
                        width:"100%",
                        borderRadius:15
                    }}
                />
            </View>

            {/* Options */}
            <View style={{flex:1,justifyContent:'center'}}>
                <View style={{flexDirection:'row',marginTop:SIZES.padding,paddingHorizontal:SIZES.base}}>
                    <OptionItem 
                        icon={icons.airplane}
                        bgColor={['#46aeff',"#5884ff"]}
                        label="Flight"
                        onPress={()=>console.log('pressed')}
                    />
                    <OptionItem 
                        icon={icons.train}
                        bgColor={['#fddf90',"#fcda13"]}
                        label="Train"
                        onPress={()=>console.log('pressed')}
                    />
                    <OptionItem 
                        icon={icons.bus}
                        bgColor={['#e973ad',"#da5df2"]}
                        label="Bus"
                        onPress={()=>console.log('pressed')}
                    />
                    <OptionItem 
                        icon={icons.taxi}
                        bgColor={['#fcaba8',"#fe6bba"]}
                        label="Taxi"
                        onPress={()=>console.log('pressed')}
                    />
                </View>
                <View style={{flexDirection:'row',marginTop:SIZES.radius,paddingHorizontal:SIZES.base}}>
                    <OptionItem 
                        icon={icons.bed}
                        bgColor={['#ffc465',"#ff9c5f"]}
                        label="Bed"
                        onPress={()=>console.log('pressed')}
                    />
                    <OptionItem 
                        icon={icons.eat}
                        bgColor={['#7cf1fb',"#4ebefb"]}
                        label="Eats"
                        onPress={()=>console.log('pressed')}
                    />
                    <OptionItem 
                        icon={icons.compass}
                        bgColor={['#7be993',"#46caaf"]}
                        label="Adventure"
                        onPress={()=>console.log('pressed')}
                    />
                    <OptionItem 
                        icon={icons.event}
                        bgColor={['#fca397',"#fc7b6c"]}
                        label="Event"
                        onPress={()=>console.log('pressed')}
                    />
                </View>
            </View>

            {/* Destination */}
            <View style={{flex:1,}}>
                <Text style={{marginTop:10,marginHorizontal:30}}>Destination</Text>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={destination}
                    keyExtractor={item=> item.id.toString()}
                    renderItem={({item,index})=> renderDestination(item,index)}
                />
            </View>
        </View>
    )
}   

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : COLORS.white
    },
    shadow :{
        shadowColor : "#000",
        shadowOffset : {
            width : 0,
            height :2 
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5
    }
})


export default Home