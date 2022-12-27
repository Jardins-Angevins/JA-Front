import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { getPlant } from '../services/DataService';

class PlantBox extends Component {

	state = {
		cname: 'test',
		sname: 'testulia',
		image: require("../assets/stats-icon/A.png")
	}

	componentDidMount() {
		getPlant( this.props.nominalNumber )
			.then(console.log)/*
			.then( data => this.setState({
				'cname': data.name,
				'sname': data.scientificName
			}) )*/
	}
	render() {
		return (

			<View style={styles.statBox}>
				<Image
					source={require("../assets/stats-icon/A.png")}
					style={styles.statLogo}
				/>
				<View style={styles.statText}>
					<Text style={styles.statData}> {this.state.cname} </Text>
					<Text style={styles.statDesc}> {this.state.sname} </Text>
				</View>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	statBox: {
		display: 'flex',
		flexDirection: 'row'
	},
	statLogo: {
		width: 40,
		height: 40,
		margin: 10
	},
	statText: {
		display: 'flex',
		flexDirection: 'column'
	},
	statData: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 22
	},
	statDesc: {
		color: 'black',
		fontWeight: '300',
		fontSize: 14,
		fontStyle: 'italic'
	},


});

export default PlantBox;