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
    shadowOffset: {width: 8, height: 8,},
    shadowOpacity: 0.21,
    shadowRadius: 9.16,

    elevation: 15,

  }
})