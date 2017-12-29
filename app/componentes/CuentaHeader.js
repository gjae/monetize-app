import React from 'react'

import {
	Row,
	Grid,
	Col,
	Body,
	View,
	Text,
	Container,
	Content
}from 'native-base'
import {
	Dimensions,
	Alert
} from 'react-native'

export default class CuentaHeader extends React.Component{


	render(){
		const { width, height } = Dimensions.get('window');
		//Alert.alert('DATOS', 'ANCHO: '+JSON.stringify(width)+' ALTO: '+JSON.stringify(height));
		return (
			<Container style={{backgroundColor: "#ffffff"}}>
				<Content>
					<Grid>
						<Row style={{ height: (height*45)/100, backgroundColor:"#90DC75"  }}>
							<Text style={{color: "#ffffff"}}>
								Hola mundo
							</Text>
						</Row>
					</Grid>
				</Content>
			</Container>	
		)
	}
}

const styles = {

	mainHeader: {
		backgroundColor: "#90DC75",
		color: "#ffffff"
	}

}