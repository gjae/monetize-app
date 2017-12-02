import React from 'react'
import {
	Text,
	View,
} from 'react-native'

import {
	Button
} from 'native-base'

export default class LoginScreen extends React.Component{
	static navigationOptions = {
		title: 'Inicio'
	}


	render(){
		return (
			<View>
				<Text>Login de la APP </Text>
				<Button onPress={ ()=>{ this.props.navigation.navigate('Home') }} >
					<Text>
						Ir al home
					</Text>
				</Button>
			</View>
		)
	}
}