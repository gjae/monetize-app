import React from 'react'
import { 
	primary,
	container, 
	login,
	loginInput,
} from '../assets/styles'

import {
	Dimensions,
	Image,
	View,
} from 'react-native'

import {
	Button,
	Text,
	Container,
	Content,
	Row,
	Col,
	Grid,
	Form,
	Item,
	Input
} from 'native-base'



export default class LoginScreen extends React.Component{
	static navigationOptions = ({navigation}) => ({
	      drawerLockMode: 'locked-closed',
	      drawerLabel: () => null
	})

	render(){
		const { width, height } = Dimensions.get('window')
		return (
			<View style={[container, {width, height}]}>
				<Container>

					<Content style={login}>

						<Content>
							<Grid>
								<Row>
									<Col style={{ flex:1, alignItems: "center", justifyContent: "center" ,alignContent: "center" }}>
										<Image 
											source={require('../assets/img/icon/drawablexhdpi/icon.png')}
											style={{
												alignContent: "center",
												flex: 1
											}}
										/>
									</Col>
								</Row>
								<Row>
									<Col style={{width: "98%", bottom:0, left: 0, right: 0}}>
										<Form>
											<Item rounded style={styles.footer} >
												<Input style={{textAlign: "center"}} placeholder={'Usuario'} />
											</Item>
											<Item last rounded style={styles.footer}>
												<Input style={{textAlign: "center"}} placeholder={'Password'} />
											</Item>
										</Form>
									</Col>
								</Row>
								<Row>
									<Col style={{ marginTop: 7 }}>
										<Button block onPress={ ()=>{ this.props.navigation.navigate('Home') } } rounded  style={{backgroundColor: "#74CB57", borderWidth: 1, borderColor: "#74CB57"}}>
											<Text>
												Ingresar
											</Text>
										</Button>
									</Col>

									<Col style={{ marginTop: 7 }}>
										<Button block  style={{backgroundColor: "#90DD76", borderWidth: 1, borderColor: "#90DD76"}}>
											<Text>
												Registrar
											</Text>
										</Button>
									</Col>
								</Row>
							</Grid>
						</Content>
					</Content>

				</Container>
			</View>
		)
	}
}

const styles = {
	footer: {
		backgroundColor: "#ffffff",
		borderWidth: 1,
		borderColor: "#ffffff",
		marginTop: 16,
		alignText: "center",
		color: "#000000"
	}
}