import { createStackNavigator, createAppContainer} from 'react-navigation'
import Details from './Details'
import Home from './Home'
import Listings from './Listings'


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Details: {
    screen: Details
  },
  Listings: {
    screen: Listings
  }
}, {
    initialRouteName: 'Home',
});
  
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   homeHeader: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// })

export default createAppContainer(AppNavigator);