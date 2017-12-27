import React from 'react'
import CuentaHeader from '../componentes/CuentaHeader'

import {
	Alert,
	Text,
	TouchableOpacity
} from 'react-native'

import {
	Icon,
	View
} from 'native-base'

export default class CuentaScreen extends React.Component{

	static navigationOptions = ({navigation}) =>({
		title: navigation.state.params.cuenta.nro_cuenta,
		headerTintColor: "#ffffff",
		headerStyle: {backgroundColor:"#90DC75"},
		headerRight: <Icon name={'share'} color={'#ffffff'} />,
	})

	constructor(props){
		super(props)
		this.state = {
			movimientos: [],
			saldo: 0.00,
			...this.props.navigation.state.params.cuenta
		}
	}

	render(){
		return <CuentaHeader />
	}
}