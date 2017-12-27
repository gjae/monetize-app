import React from 'react'

import {
	Draw,
	Icon
} from 'native-base'
import {
	DrawerItems,
	SafeAreaView
} from 'react-navigation'
import {
	ScrollView,
	View,
	Text
} from 'react-native'

export default class DrawerNav extends React.Component{
	render(){
		return(
			<View>
				<View style={{alignContent: "center", justifyContent: "center",	 width: "100%", marginBottom: 0,  backgroundColor: "#90DD76", height: 150}}>
					<View style={{justifyContent: "center", alignContent: "center", alignItems: "center"}}>
						<Icon name="person" style={{ fontSize: 57, color: "#ffffff", textAlign: "center" }} />
					</View>
					<Text style={{bottom: 0, left:0, right: 0, color: "#ffffff", fontSize: 20, fontWeight: "bold", textAlign: "center"}}>
						Balance: 1,355,453.32
					</Text>
				</View>
				<ScrollView style={{ marginTop:0 }}>
					<SafeAreaView style={{flex: 1,}} forceInset={{top: 'always', horizontal: 'never'}} >
						<DrawerItems activeTintColor={"#90DD76"} {...this.props} />
					</SafeAreaView>
				</ScrollView>
			</View>
		)
	}
}