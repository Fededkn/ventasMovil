import { StyleSheet } from 'react-native'
import Header from '../Components/Header'
import Categories from '../Components/Categories'

const Home = () => {
  return (
    <>

      <Header title='Categories'/>
      <Categories />
     
    </>
  )
}

export default Home

const styles = StyleSheet.create({})