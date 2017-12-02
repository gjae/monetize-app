import React from 'react'
import {
	Text,
	View,
	Button
} from 'native-base'

export default class HomeScreen extends React.Component{
	static navigationOptions = {
		title: 'Bienvenido'
	}

	render(){
		return(
			<View>
				<Button  
					onPress={()=>{ this.props.navigation.navigate('profile', {prevScreen: 'Home'}) }}
				>
					<Text>Ver tus cuentas</Text>
				</Button>
			</View>
		);
	}
}