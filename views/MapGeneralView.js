import { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import appStyles from '../assets/appStyles.js';

import AppTitle from '../components/AppTitle.js';
import Decoration from '../components/Decoration.js';

import { getMap } from '../services/DataService.js';
import rateLimited from '../services/LimitRateService.js';

import config from '../config.json'; // assert { type : 'application/json'};

class MapGeneralView extends Component {

	constructor(...args) {
		super(...args);

		this.state = {
			region: config.map.initialRegion,
			markers: [],
		}
	}
	
	navigate(place) {
		return (function () {
			this.props.navigation.navigate(place)
		}).bind(this);
	}

	onRegionChange = rateLimited((region) => {
		getMap(region)
			.then( answer => answer.inputs.map( (position,i) => (
				<Marker 
					key={i}
					coordinate={position}
					>
					<Image
						source={require('../assets/map-dots/a.png')}
						style={styles.markers}
						/>
				</Marker> ) ) 
			)
			.then( newMarkers => this.setState({markers:newMarkers}))
	}, config.map.maxRefreshRate );

	render() {
		return (
			<View style={appStyles.app}>
				<View style={appStyles.fullWidth}>
					<AppTitle first="Vue" last="Général" />
				</View>

				<View style={styles.map}>
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
	markers: {
		width:6,
		height:6,
	},
	map: { 
		width: 350,
		height: 350,
		display: 'flex',
	},
});

export default MapGeneralView;
