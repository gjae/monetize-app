import { DrawerNavigator, StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import AccountsScreen from '../screens/AccountsScreen'


const Profile = StackNavigator({
	accounts: {
		screen: AccountsScreen 
	}
})

export const navigator = DrawerNavigator({
	Login: { screen: LoginScreen },
	Home: { screen: HomeScreen },
	profile: { screen: AccountsScreen },
})