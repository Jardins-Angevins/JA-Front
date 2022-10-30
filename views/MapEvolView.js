import { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import AppTitle from '../components/AppTitle.js';
import Decoration from '../components/Decoration.js';

class MapEvolView extends Component {

	constructor(...args) {
		super(...args);

		this.state = {

			region: {
				latitude: 47.47358187812243,
				longitude: -0.5918208695948124,
				latitudeDelta: 0.015,
				longitudeDelta: 0.022
			},
			markers: [],
		}
	}
	navigate(place) {
		return (function () {
			this.props.navigation.navigate(place)
		}).bind(this);
	}

	onRegionChange = (region) => {
		console.log(this.state.markers)
	}

	render() {
		return (
			<View style={styles.app}>
				<View style={{ width: '60%' }}>
					<AppTitle first="Évolution" last="Specimen" />
				</View>

				<View style={{ width: 350, height: 350, display: 'flex' }}>
					<MapView
						provider={PROVIDER_GOOGLE}
						style={StyleSheet.absoluteFillObject}

						region={this.state.region}
						onRegionChange={this.onRegionChange}
					>
						{this.state.markers}
						</MapView>

				</View>

				<Decoration />
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

export default MapEvolView;
