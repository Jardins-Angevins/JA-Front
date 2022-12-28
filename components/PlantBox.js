import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { getPlant } from '../services/DataService';

class PlantBox extends Component {

	state = {
		cname: 'Chargement',
		sname: '...',
		image: require("../assets/plant-placeholder.png")
	}

	onPress() {
		this.props.navigator({nominalNumber:this.props.nominalNumber})
	}

	componentDidMount() {
		getPlant( this.props.nominalNumber )
			.then( data => this.setState({
				'cname': data.name,
				'sname': data.scientificName,
				'image': { uri : `data:image/png;base64,${data.refImage}`},
			}) )
	}

	render() {
		return (
			<View style={styles.plantBox} onTouchStart={this.onPress.bind(this)}>
				<Image
					source={this.state.image}
					style={styles.plantImg}
				/>
				<View style={styles.plantText}>
					<Text style={styles.plantName}> {this.state.cname} </Text>
					<Text style={styles.plantScientificName}> {this.state.sname} </Text>
				</View>
			</View>
		)
	}

		
}

const styles = StyleSheet.create({
	plantBox: {
		display: 'flex',
		flexDirection: 'row'
	},
	plantImg: {
		width: 40,
		height: 40,
		margin: 10
	},
	plantText: {
		display: 'flex',
		flexDirection: 'column'
	},
	plantName: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 22
	},
	plantScientificName: {
		color: 'black',
		fontWeight: '300',
		fontSize: 14,
		fontStyle: 'italic'
	},
});

export default PlantBox;