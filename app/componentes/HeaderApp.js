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


	render(){
		return (
			<Header style={{ backgroundColor: this.props.color }} >
				<Body style={{alignItems: "center", justifyContent: "center", alignContent: "center"}}>
					<Title>
						{this.props.headerTitle}
					</Title>
				</Body>
				<Right>
					<TouchableOpacity>
						<Icon name={'eye'} />
					</TouchableOpacity>
				</Right>
			</Header>
		)
	}

}