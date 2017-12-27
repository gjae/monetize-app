import React from 'react'
import CuentaHeader from '../componentes/CuentaHeader'

import {
	Alert,
	Text,
	TouchableOpacity
} from 'react-native'

import {
	View,
	Button as ButtonBase,
	Icon
} from 'native-base'
import Share, {ShareSheet, Button} from 'react-native-share';
import SharedContent from '../componentes/SharedContent'

export default class CuentaScreen extends React.Component{

	static navigationOptions = ({navigation}) =>({
		title: navigation.state.params.cuenta.nro_cuenta,
		headerTintColor: "#ffffff",
		headerStyle: {backgroundColor:"#90DC75"},
		headerRight: <SharedContent {...navigation.state.params} />,
	})

	constructor(props){
		super(props)
		this.state = {
			movimientos: [],
			saldo: 0.00,
			...this.props.navigation.state.params.cuenta
		}
	}

	opened(){
		Alert.alert('DATO', 'ABRIENDO SHARED')
	}

	render(){
		return <CuentaHeader />
	}
}