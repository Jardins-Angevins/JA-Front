import { StyleSheet, View, Image, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import appStyles from '../assets/appStyles.js';

import AppTitle from '../components/AppTitle.js';
import Decoration from '../components/Decoration.js';
import PlantMarker from '../components/PlantMarker.js';
import SuperComponent from '../components/SuperComponent.js';

import { getMap , getPlant } from '../services/DataService.js';
import rateLimited from '../services/LimitRateService.js';

import config from '../config.json'; // assert { type : 'application/json'};

class MapEvolView extends SuperComponent {

	constructor(...args) {
		super(...args);

		this.state = {
			region: config.map.initialRegion,
			markers: [],
			years: [... new Array(config.map.evolRecursiveYearCount)].map( (_,i) => (new Date).getFullYear() - i )
		}
	}
	
	componentDidMount() {
		this.state.show = true;
		this.state.nominalNumber = this.props.route.params.nominalNumber;
		if( this.state.nominalNumber == null ) {
			this.props.navigation.goBack();
		}
		
		getPlant( this.state.nominalNumber )
		    .then( data => { data.refImage = {uri:`data:image/png;base64,${data.refImage}`} ; return data } )
			.then( data => this.setState(data) )
	}
	
	onRegionChange = rateLimited((region) => {
		let id = 0;
		this.state.years.forEach( (year,i) => {
			getMap(region,{year,nominalNumber:this.state.nominalNumber})
				.then( answer => answer.inputs.map( (position) => (
					<PlantMarker
						n={i}
						key={id++}
						coordinate={position}
						plantId={position.iaGuessedSpeciesId}
						traveller={this.advancedNavivate('wiki-plant')}
						/>
					) ) 
				)
				.then( newMarkers => this.setState({markers:newMarkers}))
		} )
	}, config.map.maxRefreshRate );

	render() {
		return (
			<View style={appStyles.app}>
			<Decoration />
				<View style={appStyles.fullWidth}>
					<AppTitle first="Évolution" last="Specimen" />
				</View>

				<View style={{flexDirection:'row', margin: 20}} onTouchEnd={()=>this.advancedNavivate('wiki-plant')({nominalNumber:this.state.nominalNumber})}>
					<Image source={this.state.refImage} style={styles.icon}/>

					<View style={{}}>
						<Text style={styles.commonName}>{this.state.name}</Text>
						<Text style={styles.scientificName}>{this.state.scientificName}</Text>
					</View>
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

				<View>
					{this.state.years.map( (year,i) => (
						<View key={year} style={{flexDirection:'row'}}>
						<Image style={styles.legend} source={PlantMarker.getNthMarkerImage(i)} />
						<Text style={{color:'black'}}>{year}</Text>
						</View>
					) ) }
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	legend: {
		width: 16,
		height: 16,
	},
	map: { 
		width: 350,
		height: 350,
		display: 'flex',
		marginBottom: 20,
	},

	commonName: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 28
	},
	scientificName: {
		color: 'black',
		fontStyle: 'italic',
		fontSize: 12
	},
	icon: {
		width: 60,
		height: 60,
		borderRadius: 5,
		marginRight: 20,
	},
});

export default MapEvolView;
