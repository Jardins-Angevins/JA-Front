import { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AppTitle from '../components/AppTitle.js';
import Decoration from '../components/Decoration.js';
/*import MapView from 'react-native-open-street-map';*/

class MapGeneralView extends Component {

	navigate(place) {
		return (function() {
			this.props.navigation.navigate(place)
		}).bind(this);
	}

	render() {
		return (
			<View style={styles.app}>
				<View style={{width: '60%'}}>
					<AppTitle first="Vue" last="Général"/>
				</View>

				

				<Decoration/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	app: {
		backgroundColor: '#DAFFE0',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	menuDesc: {
		color: '#333',
		fontStyle: 'italic',
		marginBottom: 20
	}
});

export default MapGeneralView;
