import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Add from './Add';
import StackFollow from './StackFollow';
import StackSearch from './StackSearch';
import Profile from './Profile';
import StackHome from './StackHome';


const RutasAutenticadas = createBottomTabNavigator({
  Home : {
    screen: StackHome ,
    navigationOptions : {
      title : 'Home',
    }
  },
  Search : {
    screen: StackSearch ,
    navigationOptions : {
      title : 'Search',
    
    } 
  },
  Add : {
    screen: Add ,
    navigationOptions : {
      title : 'Add',
    } 
  },
  Follow : {
    screen: StackFollow ,
    navigationOptions : {
      title : 'Follow',
    } 
  },
  Profile : {
    screen: Profile ,
    navigationOptions : {
      title : 'Profile',
    } 
  },
});


export default createAppContainer(RutasAutenticadas);