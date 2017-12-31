import React from'react'
import {
	View,
	Text,
	Container,
	Content,
	Row,
	Col,
	Grid
} from 'native-base'


export default class MovimientosScreen extends React.Component{

	static navigationOptions = ({navigation}) =>({
		title: navigation.state.params.cuenta.nro_cuenta,
		headerTintColor: "#ffffff",
		headerStyle: {backgroundColor:"#90DC75"},
	})

	render(){
		return(
			<Container style={{backgroundColor: "#ffffff"}}>

			</Container>
		)
	}
}