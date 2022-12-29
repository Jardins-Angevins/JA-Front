import { StyleSheet, View, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import appStyles from '../assets/appStyles.js';

import AppTitle from '../components/AppTitle.js';
import Decoration from '../components/Decoration.js';
import PlantMarker from '../components/PlantMarker.js';
import SuperComponent from '../components/SuperComponent.js';

import { getMap } from '../services/DataService.js';
import rateLimited from '../services/LimitRateService.js';

import config from '../config.json'; // assert { type : 'application/json'};
import PlantBox from '../components/PlantBox.js';

class MapGeneralView extends SuperComponent {

	constructor(...args) {
		super(...args);

		this.state = {
			region: config.map.initialRegion,
			markers: [],
			legendIds: [],
		}
	}

	onRegionChange = rateLimited((region) => {
		getMap(region)
			.then( k => { console.log(k) ; return k })
			.then( answer => {
				let Indeces = [... new Set(answer.inputs.map(k=>k.iaGuessedSpeciesId))];
				let R = answer.inputs.map( (position,i) => (
				<PlantMarker
					n={Indeces.indexOf(position.iaGuessedSpeciesId)}
					key={i}
					coordinate={position}
					plantId={position.iaGuessedSpeciesId}
					traveller={this.advancedNavivate('wiki-plant')}
					/>
				) );
				this.setState({legendIds:Indeces.splice(0,3)});
				return R;
			} )
			.then( newMarkers => this.setState({markers:newMarkers}))
	}, config.map.maxRefreshRate );

	render() {
		return (
			<View style={appStyles.app}>

				<Decoration />

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

				<View style={{height:200}}>
					{
						this.state.legendIds.map( (nominalNumber,i) => (
						<View style={{flexDirection:'row'}}>
							<Image style={styles.legend} source={PlantMarker.getNthMarkerImage(i)} />
							<PlantBox nominalNumber={nominalNumber} /> 
						</View> ) )
					}
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	legend: {
		width:20,
		height:20,
	},
	map: { 
		width: 350,
		height: 350,
		display: 'flex',
	},
});

export default MapGeneralView;
