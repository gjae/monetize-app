import React from 'react'
import {
	View,
	Text,
	Button
} from 'native-base'

import {
	Alert
} from 'react-native'


export default class AccountsScreen extends React.Component{
	static navigationOptions = {
		drawLabel: "Mis cuentas",
	}

	render(){
		const { params } = this.props.navigation.state
		const { navigate } = this.props.navigation;
		Alert.alert('Test', JSON.stringify(params))
		return(
			<View>
				<Button onPress={()=>{ navigate(params.prevScreen) } }>
					<Text>Volver</Text>
				</Button>
			</View>
		)
	}
}