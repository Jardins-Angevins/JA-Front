import { Component } from 'react';
import { Image } from 'react-native';
import { Marker } from 'react-native-maps';

class PlantMarker extends Component {

	render() {
		return (
			<Marker
				coordinate={this.props.coordinate} 
				onPress={this.onPress.bind(this)}
				>
				<Image
					source={require('../assets/map-dots/a.png')}
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