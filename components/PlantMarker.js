import { Component } from 'react';
import { Image } from 'react-native';
import { Marker } from 'react-native-maps';

class PlantMarker extends Component {

	static getNthMarkerImage( n ) {
		if( n >= 5 ) n = 4;
		if( n < 0 ) n = 0;
		return ([
			require('../assets/map-dots/a.png'),
			require('../assets/map-dots/b.png'),
			require('../assets/map-dots/c.png'),
			require('../assets/map-dots/d.png'),
			require('../assets/map-dots/e.png'),
		])[n];
	}

	render() {
		let pointerImage = require('../assets/map-dots/a.png');
		if( this.props.n ) {
			pointerImage = PlantMarker.getNthMarkerImage(this.props.n)
		}
		return (
			<Marker
				coordinate={this.props.coordinate} 
				onPress={this.onPress.bind(this)}
				>
				<Image
					source={pointerImage}
					style={{width:8, height:8}}
				/>
			</Marker>
		);
	}

	onPress() {
		this.props.traveller({nominalNumber:this.props.plantId})
	}

}

export default PlantMarker;