import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import AddButton from '../Components/AddButton'
import { useState } from 'react'
import * as Location from 'expo-location'
import MapsPreview from '../Components/MapsPreview'
import { googleApi } from '../firebase/googleApi'
import { usePostUserLocationMutation } from '../App/services/shopServices'
import { useSelector } from 'react-redux'

const LocationSelector = ({navigation}) => {
  
    const localId = useSelector(state => state.auth.value.localId)
    const [location,setLocation] = useState({latitude:"",longitude:""})
    const [errorMsg,setErrorMsg] = useState(null)
    const [address,setAddress] = useState("")
    const [triggerPostUserLocation] = usePostUserLocationMutation()
  
    useEffect(()=>{
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if(status !== 'granted'){
                setErrorMsg('El permiso a sido denegado')
                return
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude:location.coords.latitude,
                longitude:location.coords.longitude})
        })()
    },[])

      // useeffect old

    useEffect(()=> {

        (async () =>{
            try {
                if(location.latitude){
                    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleApi.mapStatic}`)
                    const data = await response.json()
                    console.log(data)
                    setAddress(data.results[0].formatted_address)
                }
            } catch (error) {
                setErrorMsg(error.message)
            }
        })
    },[location])

      // useffect new
      
    //   useEffect(() => {
    //     (async () => {
    //         try {
    //             if (location.latitude) {
    //                 const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleApi.mapStatic}`)
    //                 const data = await response.json()
    //                 console.log(data)
    //                 setAddress(data.results[0].formatted_address)
    //             }
    //         } catch (error) {
    //             setErrorMsg(error.message)
    //         }
    //     })();
    // }, [location]);
    
      // onconfirm  old

    const onConfirmAddres = async () => {
        try {
            const locationFormatted = {
                address,
                ...location
            }
            const data = await triggerPostUserLocation({localId,locationFormatted})
            console.log(data)
            navigation.goBack()
        } catch (error) {
            setErrorMsg(error.message)
        }
    }

    // onconfirm new
    // const onConfirmAddres = async () => {
    //     try {
    //         if (location && location.latitude) {
    //             const locationFormatted = {
    //                 address,
    //                 ...location
    //             };
    //             const data = await triggerPostUserLocation({ localId, locationFormatted });
    //             console.log(data);
    //             navigation.goBack();
    //         } else {
    //             // Manejar el caso donde la ubicación no está definida
    //             console.error('La ubicación no está definida');
    //         }
    //     } catch (error) {
    //         setErrorMsg(error.message);
    //     }
    // };

    return (
    <View style={styles.container}>
      <Text style={styles.text}>Direccion: {address}</Text>
        <MapsPreview latitude={location.latitude} longitude={location.longitude}/>
        <AddButton title="Confirmar localización" onPress={onConfirmAddres} />
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        marginTop:50,
        gap:20,
    },
    text:{
        fontSize:20
    },
    
})