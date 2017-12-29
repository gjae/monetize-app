import React, {Component} from 'react'
import {
	View,
	Text,
	Container,
	Content,
	Row,
	Grid,
	Col,
	Form,
	Input,
	Item,
	Button,
	Icon,
	Picker,
} from 'native-base'

import {
	Alert
} from 'react-native'

import {networkConnectData as con} from '../config/connection'

export default class FormAddCuenta extends Component{
	static navigationOptions = ({navigation}) =>({
		title: 'Agregar cuenta',
		headerTintColor: "#ffffff",
		headerStyle: {backgroundColor:"#90DC75"},
	})

	constructor(props){
		super(props)
		this.state = {
			nombre_titular: null,
			apellido_titular: null,
			cedula_titular: null,
			email_titular: null,
			user_id: 1,
			fecha_apertura: null,
			descripcion: null,
			nro_cuenta: null,
			tipo_cuenta: "C",
			banco_id: 0,
			bancos: []

		}
	}

	async componentDidMount(){
		var datos = fetch( con.protocol+'//'+con.host+':'+con.port+'/api/banco/get?all=true');
		var bancos = await datos.then( (datos) => JSON.parse(datos._bodyInit) );

		bancos = JSON.parse(bancos.bancos)
		this.setState({
			bancos: bancos
		})

	}

	_codigoCuentas(){
		let { bancos } = this.state
		let banco = bancos.filter( (banco)=>{
			if(this.state.banco_id == banco.id)
				return banco;
		})

		return (bancos[0] && this.state.banco_id != 0) ? banco[0].codigo_cuentas : '-'
	}

	renderSelectable(){
		let { bancos } = this.state

		let items = bancos.map( (banco, i) =>{
			return <Picker.Item  key={banco.id} label={banco.nombre_banco} value={banco.id} />
		} )

		return items;
	}

	render(){
		return(
			<Container style={{backgroundColor: "#ffffff"}}>
				<Content>
					<Form>
						<Container>
							<Content>
								<Row>
									<Col style={{ width: "50%" }}>
										<Item>
											<Input onChangeText={(input)=>{ this.setState({ nombre_titular: input }) }} placeholder={'Nombre del titular'} />
										</Item>
									</Col>
									<Col style={{ width: "50%" }}>
										<Item>
											<Input onChangeText={(input)=>{ this.setState({ apellido_titular: input }) }} placeholder={'Apellido del titular'} />
										</Item>
									</Col>
								</Row>
								<Row>
									
									<Col style={{ width: "20%" }}>
										<Picker
											mode={'dropdown'}
											placeholder={'Banco'}
											onValueChange={(value)=>{ this.setState({ banco_id: value }); }}
											selectedValue={this.state.banco_id}
										>
											<Picker.Item label={'Seleccione uno'} value={0} />
											{this.renderSelectable()}
										</Picker>
									</Col>

									<Col style={{ width: "15%" }}>
										<Item>
											<Input disabled value={ this._codigoCuentas() }  placeholder={'Codigo de banco'} />
										</Item>
									</Col>
									<Col style={{ width: "32%" }}>
										<Item>
											<Input onChangeText={(input)=>{ this.setState({ nro_cuenta: input }) }} placeholder={'Numero de cuenta'} />
										</Item>
									</Col>
									<Col style={{ width: "22%" }}>
										<Picker
											mode={'dropdown'}
											placeholder={'Tipo de cuenta'}
											onValueChange={(value)=>{ this.setState({ tipo_cuenta: value }); }}
											selectedValue={this.state.tipo_cuenta}
										>
											<Picker.Item label={'CORRIENTE'} value={'C'} />
											<Picker.Item label={'AHORROS'} value={'A'} />
											<Picker.Item label={'FAL'} value={'F'} />
											<Picker.Item label={'FIDEICOMISO'} value={'FA'} />
											<Picker.Item label={'OTROS'} value={'OT'} />
										</Picker>
									</Col>
								</Row>
								<Row>
									<Col style={{ width: "100%" }}>
										<Button 
											iconLeft block style={{backgroundColor: "blue"}}
											onPress={()=>{
												Alert.alert('DATOS', JSON.stringify(this.state))
											}}
										>
											<Icon name='cloud-circle' />
											<Text>Guardar</Text>
										</Button>
									</Col>
								</Row>
							</Content>
						</Container>
					</Form>
				</Content>
			</Container>
		)
	}
}