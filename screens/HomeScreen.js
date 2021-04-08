import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    ScrollView
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TabBar from './TabBar';
const HomeScreen = ({navigation}) => {
    const Emergency = () =>
    {

    };
    const Rescue1122 = () =>
    {

    };
    const AnimalRescue = () =>{

    };
    
    const getVaccine = () =>{

    };
    return(
        <View style = {{...styles.container}}>
            <View style={{...styles.header}}>
                <Text style={{...styles.headerText}}>
                    Rescue Lives
                </Text>
            </View>
            <ScrollView>
            <View style={{...styles.middleContainer}}>
                <View style={{...styles.row0}}>
                <TouchableOpacity
                    onLongPress={Emergency}
                    style={{...styles.EmergencyButton}}>
                        <FontAwesome name="ambulance"
                        size={47}
                        color="#003152">
                        </FontAwesome>
                        <Text style={{paddingTop:20}}>
                            Ambulance Service
                        </Text>
                    </TouchableOpacity>
                    <View style = {{flex:0.2}}></View>
                    <TouchableOpacity
                    onLongPress={AnimalRescue}
                    style={{...styles.AnimalRescueButton}}>
                        <FontAwesome name="paw"
                        size={47}
                        color="#003152">
                        </FontAwesome>
                        <Text style={{paddingTop:20}}>
                            Animal Rescue Service 
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{...styles.row}}>
                <View style={{...styles.BigButtonView}}>
                        <FontAwesome name="medkit"
                        size={45}
                        color="#003152"
                        style={{position:"absolute", left : 30, top:20}}>
                        </FontAwesome>
                        <Text style={{fontWeight:"bold", position:"absolute",right:35, top:20}}>
                                Someone wants rescue help?{"\n"}
                                <Text style={{fontWeight:"normal"}}>
                                     Get a rescue team on your{"\n"}location.
                                </Text>
                            </Text>
                            <TouchableOpacity style={{...styles.InsideButton}}
                            >
                            <Text style={{fontWeight:"bold", color:"#003152"}}>Get a rescue team</Text>
                            </TouchableOpacity>
                    </View>
                
                   
                </View>
                <View style={{...styles.row}}>
                    <View style={{...styles.BigButtonView}}>
                            <Fontisto
                            name="injection-syringe"
                            size={47}
                            color="#003152"
                            style={{position:"absolute", left : 30, top:20}}>
                            </Fontisto>
                            <Text style={{fontWeight:"bold", position:"absolute",right:20, top:20}}>
                                Need Vaccination for your pets?{"\n"}
                                <Text style={{fontWeight:"normal"}}>
                                     Choose the veterinary you prefer
                                </Text>
                            </Text>
                            <TouchableOpacity style={{...styles.InsideButton}}
                            >
                            <Text style={{fontWeight:"bold", color:"#003152"}}>Find a vet</Text>
                            </TouchableOpacity>
                            
                    </View>
                </View>
                <View style={{...styles.row}}>
                    <View
                        
                        style={{...styles.BigButtonView}}>
                            <Fontisto
                            name="injection-syringe"
                            size={47}
                            color="#003152"
                            style={{position:"absolute", left : 30, top:20}}>
                            </Fontisto>
                            <Text style={{fontWeight:"bold", position:"absolute",right:40, top:20}}>
                                Need Vaccination for your{"\n"}infants?{"\n"}
                                <Text style={{fontWeight:"normal"}}>
                                     Choose the center you prefer
                                </Text>
                            </Text>
                            <TouchableOpacity style={{...styles.InsideButton}}
                            >
                            <Text style={{fontWeight:"bold", color:"#003152"}}>Find a center</Text>
                            </TouchableOpacity>
                            
                    </View>
                </View>
                <View style={{...styles.row}}>
                    <View
                        
                        style={{...styles.BigButtonView}}>
                            <FontAwesome5
                            name="hospital"
                            size={47}
                            color="#003152"
                            style={{position:"absolute", left : 30, top:20}}>
                            </FontAwesome5>
                            <Text style={{fontWeight:"bold", position:"absolute",right:50, top:20}}>
                                Want to go to a vet for your{"\n"}pets?{"\n"}
                                <Text style={{fontWeight:"normal"}}>
                                     See the nearby Vets
                                </Text>
                            </Text>
                            <TouchableOpacity style={{...styles.InsideButton}}
                            >
                            <Text style={{fontWeight:"bold", color:"#003152"}}>Find a vet</Text>
                            </TouchableOpacity>
                            
                    </View>
                </View>
                <View style={{...styles.row}}>
                    <View
                        
                        style={{...styles.BigButtonView}}>
                            <FontAwesome5
                            name="hospital"
                            size={47}
                            color="#003152"
                            style={{position:"absolute", left : 30, top:20}}>
                            </FontAwesome5>
                            <Text style={{fontWeight:"bold", position:"absolute",right:64, top:20}}>
                                Want to go to a hospital?{"\n"}
                                <Text style={{fontWeight:"normal"}}>
                                     See the nearby hospitals
                                </Text>
                            </Text>
                            <TouchableOpacity style={{...styles.InsideButton}}
                            >
                            <Text style={{fontWeight:"bold", color:"#003152"}}>Find a hospital</Text>
                            </TouchableOpacity>
                            
                    </View>
                </View>
            </View>
            
                
            </ScrollView>
            
        </View>

    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#f1eee8'
    },
    header:{
       height:60,
        backgroundColor:'#003152',
        justifyContent:'center',
        
    },
    footer:{
        flex:.5,
 
        
    },
    headerText:{
        fontSize:20,
        color:'white',
        paddingHorizontal:20
        
        
    },
    middleContainer:{
        flex:4,
        backgroundColor:'#f4f2ed',
        
    },
    EmergencyButton:{
        height: 155,
        width: 155,
        backgroundColor:'#FFFAFA',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.5,
        shadowOpacity:0.9,
        shadowColor:"black",
        elevation: 5,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
        
    },
    RescueButton:{ 
        height: 140,
        width: 140,
        backgroundColor:'#FFFAFA',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.5,
        shadowOpacity:0.9,
        shadowColor:"black",
        elevation: 5,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
        
    },
    row0:{
        flexDirection:'row',
        paddingTop:40,
        justifyContent:'center'
    },
    row:{
        flexDirection:'row',
        paddingTop:20,
        justifyContent:'center'
    },
   
    AnimalRescueButton:{
        height: 155,
        width: 155,
        backgroundColor:'#FFFAFA',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.5,
        shadowOpacity:0.9,
        shadowColor:"black",
        elevation: 5,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
    getDocHomeButton:{
        height: 140,
        width: 140,
        backgroundColor:'#FFFAFA',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.5,
        shadowOpacity:0.9,
        shadowColor:"black",
        elevation: 5,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
   
    InsideButton:{
        backgroundColor:'#64C6C5',
        height:36,
        position:"absolute",
        bottom:20,
        width:290,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
        
    },
    BigButtonView:{
        height:140,
        flex:0.84,
        backgroundColor:'#FFFAFA',
        borderRadius:5,
        justifyContent:'center',
        paddingTop:20,
        flexDirection:"row",
        borderWidth:0.5,
        shadowOpacity:0.9,
        shadowColor:"black",
        elevation: 5,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
    

});