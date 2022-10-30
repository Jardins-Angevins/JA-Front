import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import appStyles from '../assets/appStyles.js';

import AppTitle from '../components/AppTitle.js';
import Decoration from '../components/Decoration.js';

class MapGeneralView extends Component {

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
			<View style={appStyles.app}>
				<View style={{ width: '60%' }}>
					<AppTitle first="Vue" last="Général" />
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

export default MapGeneralView;
