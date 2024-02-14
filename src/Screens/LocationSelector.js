import { StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import AddButton from '../Components/AddButton'
import * as Location from 'expo-location'
import MapsPreview from '../Components/MapsPreview'
import { googleApi } from '../firebase/googleApi'
import { usePostUserLocationMutation } from '../App/services/shopServices'
import { useSelector } from 'react-redux'
import { colors } from '../Global/colors'

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

    const onConfirmAddress = async () => {
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

    return (
    <View style={styles.container}>
        <Text style={styles.text}>Direccion: {address}</Text>
        <MapsPreview latitude={location.latitude} longitude={location.longitude}/>
        <AddButton title="Confirmar localización" onPress={onConfirmAddress} />
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
        fontSize:20,
        color: colors.primary,
    },
    
})