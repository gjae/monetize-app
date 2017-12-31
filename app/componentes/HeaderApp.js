import React from 'react'

import {
	Header,
	Left,
	Right,
	Body,
	Title,
	Icon,
} from 'native-base'

import {
	Text
} from 'react-native'

import {
	TouchableOpacity
} from 'react-native'

import FontAwesome, { Icons } from 'react-native-fontawesome';

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
						<Text>
							<FontAwesome style={{ fontSize: 32 }} color={"#ffffff"}>{Icons.pencil}</FontAwesome>
						</Text>
					</TouchableOpacity>
				</Right>
			</Header>
		)
	}

}