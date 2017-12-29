import React from 'react'

import {
	Header,
	Left,
	Right,
	Body,
	Title,
	Icon
} from 'native-base'

import {
	TouchableOpacity
} from 'react-native'


export default class HeaderApp extends React.Component {

	constructor(props){
		super(props)
	}

	render(){
		return (
			<Header style={{ backgroundColor: this.props.color }} >
				<Body style={{alignItems: "center", justifyContent: "center", alignContent: "center"}}>
					<Title>
						{this.props.headerTitle}
					</Title>
				</Body>
				<Right>
					<TouchableOpacity onPress={()=>{this.props.navigation.navigate('NuevaCuenta')}}>
						<Icon name={'bookmarks'} style={{color: "#ffffff"}} color={'#ffffff'} />
					</TouchableOpacity>
				</Right>
			</Header>
		)
	}

}