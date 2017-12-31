import React from 'react'
import CuentaHeader from '../componentes/CuentaHeader'

import {
	View,
	Alert,
	Text,
	TouchableOpacity,
	Dimensions,
} from 'react-native'

import {
	Button as ButtonBase,
	Icon,
	Text as TextBase,
	Container,
	Content,
	Row,
	Grid,
	Col,
	H2
} from 'native-base'
import Share, {ShareSheet, Button} from 'react-native-share';
import SharedContent from '../componentes/SharedContent'
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {networkConnectData as con} from '../config/connection'

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
			saldo: '...',
			promedio: '...',
			movimientos: '...',
			...this.props.navigation.state.params.cuenta
		}
	}

	opened(){
		Alert.alert('DATO', 'ABRIENDO SHARED')
	}

	async componentDidMount(){
		const {navigation} = this.props
		const { cuenta } = navigation.state.params
		let solicitud = await fetch( con.protocol+'//'+con.host+':'+con.port+'/api/cuentas/get?id='+cuenta.id )
								.then( resp=> resp._bodyInit)

		solicitud = JSON.parse(solicitud);
		this.setState({
			...solicitud
		})
	}

	render(){
		const { width, height } = Dimensions.get('window');
		return (
			<Container style={{backgroundColor: "#ffffff"}}>
				<Content>
					<Row style={{ height: (height*45)/100, backgroundColor:"#90DC75"  }}>
						<Col style={{ width: (width*53)/100 }}>
							<View style={{
								backgroundColor: "#67A451",
								height:( ((height*45)/100)*72 )/100,
								width: (width*52)/100,
								borderRadius: 90,
								alignContent: "center",
								alignItems: "center",
								paddingTop: 62
							}}>
								<H2 style={{color: "#ffffff", fontSize: 40, height: 190}}>VEF</H2>

							</View>
						</Col>
						<Col style={{ paddingTop: 10 }}>
							<H2 style={{color: "#ffffff", fontSize: 25}} >
								Saldo actual:  {this.state.saldo}
								{'\n'}
								Promedio: {this.state.promedio}
								{'\n'}
								Movimientos: {this.state.total_movimientos}
							</H2>
						</Col>
					</Row>
					<Row>
						<Row>
							<Col style={{ width: (width/2) }}>
								<TouchableOpacity style={{ alignContent: "center", alignItems: "center"}}>
									<Text style={{color: "#90DC75", textAlign: "center"}}>
										<FontAwesome style={{ fontSize: 72 }} color="#90DC75">
											{Icons.creditCard}
										</FontAwesome>
										{'\n'}Tarjetas
									</Text>
								</TouchableOpacity>
							</Col>
							<Col style={{ width: (width/2) }}>
								<View style={{borderRightColor: "#90DC75", borderStyle: "solid"}}>
									<TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Movimientos', {Movimientos: this.state.movimientos, cuenta: this.props.navigation.state.params.cuenta}) }}  style={{ alignContent: "center", alignItems: "center"}}>
										<Text style={{color: "#90DC75", textAlign: "center"}}>
											<FontAwesome style={{ fontSize: 72 }} color="#90DC75">
												{Icons.money}
											</FontAwesome>
											{'\n'}Movimientos
										</Text>
									</TouchableOpacity>
								</View>
							</Col>
						</Row>
						<Row>
							<Col>
							</Col>
							<Col>
							</Col>

						</Row>
					</Row>
				</Content>
			</Container>
		)
	}
}
