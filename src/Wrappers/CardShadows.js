import { StyleSheet, View } from 'react-native'

const CardShadows = ({children,style}) => {
  return (
    <View style={{...styles.container,...style}}>
        {children}
    </View>
  )
}

export default CardShadows

const styles = StyleSheet.create({
  container:{
    shadowColor: "#000",
    shadowOffset: {width: 10, height: 10,},
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,

  }
})