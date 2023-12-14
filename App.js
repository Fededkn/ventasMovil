import { StyleSheet, StatusBar, View } from 'react-native';
import Home from './src/Screens/Home';

const App = () => {

  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },

});

export default App