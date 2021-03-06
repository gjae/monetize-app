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
	H3,
	Picker,
	Toast,
	ActionSheet,
	Root
} from 'native-base'

import {
	Alert,
} from 'react-native'

import {networkConnectData as con} from '../config/connection'
import DatePicker from 'react-native-datepicker'

import FontAwesome, { Icons } from 'react-native-fontawesome';

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
			fecha_apertura: '1995-01-01',
			descripcion: null,
			nro_cuenta: null,
			tipo_cuenta: "C",
			banco_id: 0,
			bancos: [],
			showToast: false,
			_btnSend: null

		}
	}

	componentWillMount(){
		Toast.toastInstance = null;
		ActionSheet.actionsheetInstance = null;
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

	async sendCuenta(){
		const { _btnSend } = this.state
		_btnSend._root.disabled = true

		let dataSerial = { 
			nombre_titular : this.state.nombre_titular, 
			apellido_titular : this.state.apellido_titular, 
			cedula_titular : this.state.cedula_titular,
			nro_cuenta : this.state.nro_cuenta,
			banco_id : this.state.banco_id,
			email_titular : this.state.email_titular,
			descripcion : this.state.descripcion,
			user_id : this.state.user_id,
			fecha_apertura: this.state.fecha_apertura,
			tipo_cuenta: this.state.tipo_cuenta };

		//Alert.alert('DATOS', JSON.stringify(dataSerial));

		let resp = await fetch( con.protocol+'//'+con.host+':'+con.port+'/api/cuentas/crear',{
			method: 'POST',
			headers:{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dataSerial)
		} ).then( data => data._bodyInit );

		resp = JSON.parse(resp)
		Toast.show({
			text: resp.mensaje,
			position: 'bottom',
			duration: 3000
		})

		setTimeout(()=>{
			this.props.navigation.goBack();
		}, 3000);
	}
	render(){
		return(
			<Root>
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
									<Col>
										<H3>Fech de apertura</H3>
								      <DatePicker
								        style={{width: 200}}
								        date={this.state.fecha_apertura}
								        mode="date"
								        placeholder="Seleccione fecha"
								        format="YYYY-MM-DD"
								        minDate="1995-01-01"
								        maxDate="2020-12-31"
								        confirmBtnText="Confirmar"
								        cancelBtnText="Cancelar"
								        customStyles={{
								          dateIcon: {
								            position: 'absolute',
								            left: 0,
								            top: 4,
								            marginLeft: 0
								          },
								          dateInput: {
								            marginLeft: 36
								          }
								          // ... You can check the source to find the other keys.
								        }}
								        onDateChange={(date) => {this.setState({fecha_apertura: date})}}
								      />
								    </Col>
								</Row>
								<Row>
									<Col>
										<Item>
											<Input onChangeTex={(text)=>{ this.setState({cedula_titular : text}) }} placeholder={'Cedula del titular'} />
										</Item>
									</Col>
									<Col>
										<Item>
											<Input onChangeTex={(text)=>{ this.setState({email_titular : text}) }} placeholder={'Correo electronico del titular'} />
										</Item>
									</Col>
								</Row>
								<Row>
									<Col>
										<Item>
											<Input multiline={true} numberOfLines={2} onChangeText={(text)=>{this.setState({descripcion: text})}} placeholder={'Agrega una descripcion'} />
										</Item>
									</Col>
								</Row>
								<Row>
									<Container padder>
										<Col style={{ width: "100%" }}>
											<Button 
												iconLeft block style={{backgroundColor: "#90DC75"}}
												onPress={()=>{this.sendCuenta()}}
												ref={(c)=>this.state._btnSend = c}
											>
												<Text>
													<FontAwesome style={{fontSize: 23}}>{Icons.check}</FontAwesome>
													Guardar
												</Text>
											</Button>
										</Col>
									</Container>
								</Row>
							</Content>
						</Container>
					</Form>
				</Content>
			</Container>
			</Root>
		)
	}
}