import { DrawerNavigator, StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import AccountsScreen from '../screens/AccountsScreen'
import CuentaScreen from '../screens/CuentaScreen'
import DrawerNav from '../componentes/DrawerNav'


export const navigator = StackNavigator({
	Login: { 
		screen: LoginScreen, 
		navigationOptions: {
			header: false
		}
	},
	Home: { 
		screen: HomeScreen,
		navigationOptions:{
			header: false
		}
	},
	Detalle: {screen: CuentaScreen}
});