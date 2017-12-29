import React from 'react'
import HeaderApp from '../componentes/HeaderApp'

import {
	Text,
	View,
	Button,
	Container,
	Header,
	Body,
	Content,
	Title,
	List,
	ListItem,
	Right,
	Icon,
	Fab,
	Row
} from 'native-base'

import {
	Dimensions,
	TouchableOpacity,
	Alert
} from 'react-native'

import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			cuentas : [],
			activeFab: false
		} // END STATE
	}

	_request(){
		return fetch('http://192.168.43.43:8000/api/cuentas');
	}

	componentDidMount(){
		var  k =this._request();
		var k2 = k.then( (json) => JSON.parse(json._bodyInit) ).then( (data) => this.setState({ cuentas: JSON.parse(data.cuentas) }) )

	}

	_checkAccount(acc){
		this.props.navigation.navigate('Detalle', {cuenta: acc});
	}
	_renderList(){
		var items = this.state.cuentas.map((dato, i)=>{
			return (
					<ListItem button={true} icon={true} key={i}>
						<TouchableOpacity onPress={()=>{this._checkAccount(dato)}}>
							<Body>
								<Text>{dato.descripcion}</Text>
								<Text note>{dato.nro_cuenta}</Text>
							</Body>
						</TouchableOpacity>
					</ListItem>
				)
		})

		return items;
	}

	render(){
		const {width, height} = Dimensions.get('window')
		return(
			<Container style={{ backgroundColor: "#FFFFFF", width, height }}>
				<HeaderApp color={'#90DD76'} headerTitle={'Registro de cuentas'} navigation={this.props.navigation} />
				<Content style={{width: width, height: height}}>
					<View style={{flex: 1}} >
					<List>
						{this._renderList()}
					</List>
						<Fab
							active={ this.state.activeFab }
							direction={"up"}
							style={{backgroundColor: "#90DD76", bottom: 0}}
							position={"bottomRight"}
							onPress={()=> this.setState({ activeFab: !this.state.activeFab }) }
							containerStyle={{ }}

						>
							<Icon name={'settings'} />
							<Button style={{backgroundColor:"#90DD76"}} >
								<Icon name={'bookmarks'} />
							</Button>
						</Fab>
					</View>
				</Content>
			</Container>
		);
	}
}