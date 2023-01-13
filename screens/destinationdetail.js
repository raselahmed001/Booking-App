import React from 'react'
import {Text , View , Image, TouchableOpacity , StyleSheet} from 'react-native'
import icons from '../constants/icons'
import images from '../constants/images'
import { COLORS, SIZES } from '../constants/theme'
import {LinearGradient} from 'expo-linear-gradient';


const StarView = ({rate}) => {
    var starComponents = [];
    var fullStar = Math.floor(rate)
    var noStar = Math.floor(5-rate)
    var halfStar = 5-fullStar-noStar

    //fullstar

    for(var i=0 ; i<fullStar ; i++){
        starComponents.push(
            <Image 
                key={`full-${i}`}
                source={icons.starFull}
                resizeMode="cover"
                style={{
                    height:20,
                    width:20
                }}
            />
        )
    }

    //halfStar
    for(var i=0 ; i<halfStar ; i++){
        starComponents.push(
            <Image 
                key={`half-${i}`}
                source={icons.starHalf}
                resizeMode="cover"
                style={{
                    height:20,
                    width:20
                }}
            />
        )
    }

    //nostar
    for(var i=0 ; i<noStar ; i++){
        starComponents.push(
            <Image 
                key={`empty-${i}`}
                source={icons.starEmpty}
                resizeMode="cover"
                style={{
                    height:20,
                    width:20
                }}
            />
        )
    }

    return(
        <View style={{flexDirection:'row',alignItems:'center'}}>
            {starComponents}
            <Text style={{marginLeft:SIZES.base,color:COLORS.gray}}>{rate}</Text>
        </View>
    )
}

const IconLabel = ({icon, label}) =>{
    return(
        <View style={{alignItems:'center'}}>
            <Image 
                source={icon}
                resizeMode="cover"
                style={{
                    height:50,
                    width:50
                }}
            />
            <Text style={{marginTop:SIZES.padding,color:COLORS.gray}}>{label}</Text>
        </View>
    )
}

const DestinationDetail = ({navigation}) => {
    
    return(
        <View style={styles.container}>
            {/*Header*/}
            <View style={{flex:2,}}>
                <Image 
                    source={images.skiVillaBanner}
                    resizeMode="cover"
                    style={{
                        height:'80%', 
                        width:'100%'
                    }}
                />
                <View style={[styles.shadow,{
                    position:'absolute',
                    bottom:"5%",
                    right:"5%",
                    left:"5%",
                    borderRadius:15,
                    padding:SIZES.padding,
                    backgroundColor:COLORS.white
                }]}>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.shadow}>
                            <Image 
                                source={images.skiVilla}
                                resizeMode="cover"
                                style={{
                                    height:70,
                                    width:70
                                }}
                            />
                        </View>
                        <View style={{marginHorizontal:SIZES.radius,justifyContent:'space-around'}}>
                            <Text style={{fontSize:16 }}>Ski Villa</Text>
                            <Text style={{color:COLORS.gray}}>France</Text>
                            <StarView
                                rate={3.5}
                            />
                        </View>
                    </View>
                    <View style={{marginTop:SIZES.radius}}>
                        <Text style={{alignItems:'center',color:COLORS.gray}}>
                            Ski Villa offers simple rooms with mountain views in front of the ski lift to the ski resort
                        </Text>
                    </View>
                </View>
                <View 
                    style={{
                        position:'absolute',
                        flexDirection:'row',
                        top:50,
                        left:20,
                        right:20
                    }}
                >
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={()=> {navigation.navigate("Home")}}>
                            <Image
                                source={icons.back}
                                resizeMode="cover"
                                style={{
                                    width:30,
                                    height:30
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <TouchableOpacity>
                            <Image
                                source={icons.menu}
                                resizeMode="cover"
                                style={{
                                    width:30,
                                    height:30
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            {/*Body*/}
            <View style={{flex:1.5,}}>
                <View style={{flexDirection:'row',marginTop:SIZES.base,paddingHorizontal:SIZES.padding,justifyContent:'space-around'}}>
                    <IconLabel 
                        icon={icons.villa}
                        label="Villa"
                    />
                    <IconLabel 
                        icon={icons.parking}
                        label="Parking"
                    />
                    <IconLabel 
                        icon={icons.wind}
                        label="4* C"
                    />
                </View>
                {/*About*/}
                <View style={{marginTop:SIZES.padding, paddingHorizontal:SIZES.padding}}>
                    <Text style={{fontSize:18}}>About</Text>
                    <Text style={{color:COLORS.gray,marginTop:6}}>An object containing the props for the default tab bar component. If you're using a custom tab bar, these will be passed as props to the tab bar and you can handle them.</Text>
                </View>
            </View> 
            {/*Footer*/}
            <View style={{flex:0.5 ,paddingHorizontal:SIZES.padding}}>
                <LinearGradient
                    style={{height:70,width:'100%',borderRadius:15}}
                    colors={['#edf0fc','#d6dfff']}
                    start={{x:0,y:0}}
                    end={{x:1,y:0}}
                >   
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                        <View style={{flex:1,marginHorizontal:SIZES.padding, justifyContent:'center'}}>
                            <Text>1000</Text>
                        </View>
                        <TouchableOpacity style={{width:130,height:"80%",marginHorizontal:SIZES.radius}}>
                                <LinearGradient
                                    style={{flex:1,alignItems:'center',justifyContent:'center'}}
                                    colors={['#46aeff','#5884ff']}
                                    start={{x:0,y:0}}
                                    end={{x:1,y:0}}
                                >
                                    <Text style={{color:COLORS.white,fontSize:20}}>Booking</Text>
                                </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        </View>
    )
}

export default DestinationDetail

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : COLORS.white
    },
    shadow : {
        shadowColor: '#000',
        shadowOffset : {
            width : 0,
            height : 2,
        },
        shadowOpacity : 0.35,
        shadowRadius : 3.84,
        elevation : 5
    }
})